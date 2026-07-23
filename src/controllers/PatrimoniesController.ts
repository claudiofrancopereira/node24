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
                name: 'Preitura Municipal de Catanduva',
                address: 'Praça Conde Franscico Matarazzo, 1',
                neighborhood: 'Centro',
                zipcode: '15804-000',
                latitude: -21.129921, 
                longitude: -48.999096,
                color: 'green',
        
            },
    
        });
    
        return response.json(patrimony);
    
    },
    
    async pictures(request: Request, response: Response) {
        const { idPatrimony } = request.params;

        const patrimony = Array.isArray(idPatrimony) ? idPatrimony[0] : idPatrimony;

        if (!patrimony) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };

        const image = await prisma.images.create({
            data: {
                name: 'image1.jpg',
                path: `${idPatrimony}/pictures/image1.jpg`,
                patrimoniesID: patrimony,

            },

        });

        return response.json(image);

    },
 
};