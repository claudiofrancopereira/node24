import { Request, Response } from "express";
import { mkdir } from 'fs/promises';
import path from 'path';

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

    async show(request: Request, response: Response) {
        const { idPatrimony } = request.params;
        const patrimonyId = Array.isArray(idPatrimony) ? idPatrimony[0] : idPatrimony;

        if (!patrimonyId) {
            return response.status(400).json({ error: 'Invalid patrimony id' });
        }

        const patrimony = await prisma.patrimonies.findUniqueOrThrow({
            where: {
                id: patrimonyId,

            },

            include: {
                images: true,
                reports: {
                    include: {
                        reportImages: true,

                    },

                },
                
            },

        });

        return response.json(patrimony);

    },

    async create(request: Request, response: Response) {
        async function makeFolder(idPatrimony: string): Promise<void> {
            const makeImages = path.join(__dirname, '..', '..', 'src', 'assets', idPatrimony, 'images');
            const makeReports = path.join(__dirname, '..', '..', 'src', 'assets', idPatrimony, 'reports');
                       
            try {
                await Promise.all([
                    mkdir(makeImages, { recursive: true }),
                    mkdir(makeReports, { recursive: true }),

                ]);

                console.log(`Pasta "${idPatrimony}" criada com sucesso!`);

            } catch (erro) {
                console.error('Erro ao criar a pasta:', erro);

            };

        };

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

        makeFolder(patrimony.id);
    
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
                path: `images1.jpg`,
                patrimoniesID: patrimony,

            },

        });

        return response.json(image);

    },
 
};