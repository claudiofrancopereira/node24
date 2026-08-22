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
                        involves: true,
                        cars: true,
                        reportImages: true,

                    },

                },
                
            },

        });

        return response.json(allPatrimonies);

    },

    async show(request: Request, response: Response) {
        const { patrimonyID } = request.params;
       
        if (!patrimonyID) {
            return response.status(400).json({ error: 'Invalid patrimony id' });
        }

        const patrimony = await prisma.patrimonies.findUniqueOrThrow({
            where: {
                id: String(patrimonyID),

            },

            include: {
                images: true,
                reports: {
                    include: {
                        involves: true,
                        cars: true,
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
                name: 'USF DR. CARLOS ROBERTO SURIAN',
                address: 'RUA DAS PITANGAS, 330',
                neighborhood: 'NOVA CATANDUVA I',
                zipcode: '15813-070',
                latitude: -21.1257475,
                longitude: -49.0217003,
                color: 'red',
        
            },
    
        });

        makeFolder(patrimony.id);
    
        return response.json(patrimony);
    
    },
    
    async images(request: Request, response: Response) {
        const { idPatrimony } = request.params;
        const patrimonyID = Array.isArray(idPatrimony) ? idPatrimony[0] : idPatrimony;

        async function makeFolder(idPatrimony: string): Promise<void> {
            const makeImages = path.join(__dirname, '..', '..', 'src', 'assets', idPatrimony, 'images');
                       
            try {
                await mkdir(makeImages, { recursive: true }),
          
                console.log(`Pasta "${idPatrimony}/images" criada com sucesso!`);

            } catch (erro) {
                console.error('Erro ao criar a pasta:', erro);

            };

        };

        if (!patrimonyID) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };

        const image = await prisma.images.create({
            data: {
                name: 'image1.jpg',
                path: `http://192.168.15.16:3333/src/assets/${patrimonyID}/images/image1.jpg`,
                patrimoniesID: patrimonyID,

            },

        });

        makeFolder(patrimonyID);
        
        return response.json(image);

    },
 
};