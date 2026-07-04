import { Request, Response } from "express";
import { prisma } from "../database/connection";

export default {
    async index(request: Request, response: Response) {
        const allPatrimonies = await prisma.patrimonies.findMany({
            include: {
                images: {
                    select: {
                        id: true,
                        patrimoniesID: true,
                        name: true,
                        path: true,
                        createdAt: true,
                        updatedAt: true,

                    },

                },
    
            },

        });

        return response.json(allPatrimonies);

    },

    async create(request: Request, response: Response) {
        const patrimony = await prisma.patrimonies.create({
            data: {
                name: 'GCM',
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

};
/*include: {
                images: {
                    select: {
                        id: true,
                        patrimoniesID: true,
                        name: true,
                        path: true,
                        createdAt: true,
                        updatedAt: true,

                    },

                },

                
            },
reports: {
                    include: {
                        reportImages: {
                            select: {
                                id: true,
                                path: true,
                                createdAt: true,
                                reportID: true,

                            },

                        },
                    
                    },

                },*/
