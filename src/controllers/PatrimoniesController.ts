import { Request, Response } from "express";

import { prisma } from "../database/connection";













export default {
    async index(request: Request, response: Response) {
        const allPatrimonies = await prisma.patrimonies.findMany({
            include: {
                images: true,
                reports: {
                    include: {
                        reportImages: true,

                    },

                },
                
            },

        });

        return response.json(allPatrimonies);

    },

    async create(request: Request, response: Response) {
        const patrimony = await prisma.patrimonies.create({
            data: {
                name: 'GCM 2',
                address: 'Rua Sao Paulo, 777',
                neighborhood: 'Conj. Hab. Prof. Giordano Mestrinelli',
                zipcode: '15803-270',
                latitude: -21.129917463226988, 
                longitude: -48.999346775739916,
                color: 'red',
        
            },
    
        });
    
        return response.json(patrimony);
    
    },
    
    async pictures(request: Request, response: Response) {
        const { id } = request.params;

        const patrimonyId = Array.isArray(id) ? id[0] : id;

        if (!patrimonyId) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };

        const image = await prisma.images.create({
            data: {
                name: 'image1.jpg',
                path: 'c:\image1.jpg',
                patrimoniesID: patrimonyId,

            },

        });

        return response.json(image);

    },
 
};