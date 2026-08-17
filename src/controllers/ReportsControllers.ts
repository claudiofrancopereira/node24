import { Request, Response } from "express";

import { prisma } from "../database/connection";













export default {
    async index(request: Request, response: Response) {
        console.log(request.params);
        const { patrimonyID } = request.params;

        if (!patrimonyID) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };
        
        const allReports = await prisma.reports.findMany({
            where: {
                patrimonyID: {
                  in: Array.isArray(patrimonyID) ? patrimonyID : [patrimonyID], 
    
                },
    
            },
    
            include: {  
                involve: true,
                car: true,
                reportImages: true,
    
            },

        });
        
        return response.json(allReports);

    },

    async show(request: Request, response: Response) {
        console.log(request.params);  
        
        const { patrimonyID, reportID } = request.params;
        
        if (!patrimonyID) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };

        if (!reportID) {
            return response.status(400).json({ error: 'Invalid report id' });

        };

        const oneReport = await prisma.reports.findUniqueOrThrow({
            where: {
                patrimonyID: {
                  in: Array.isArray(patrimonyID) ? patrimonyID : [patrimonyID], 
    
                },

                id: String(reportID),

            },
            
            include: {
                involve: true,
                car: true,
                reportImages: true,
            
            },

        });

        return response.json(oneReport);

    },

    async create(request: Request, response: Response) {
        const { patrimonyID } = request.params;
        console.log(patrimonyID)
       
        if (!patrimonyID) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };

        const report = await prisma.reports.create({
            data: {
                date: new Date('2026-07-18T21:38:45.889Z'),
                pages: 1,

                vehicle: '2026',
                reportOfficer: 'Claudio',

                hLocation: '12:00',
                hFinal: '13:00',

                address: 'Rua das Pintangas, 330',
                nature: 'E6',
                
                description: 'Grampeador',
                outcome: 'Devolveu',
                                
                opened: true,
                         
                
                car: {
                    create: {
                        vessel: 'Pas/Automovel',
                        makebody: 'Ford/Focus',
                        color: 'cinza',
                        plate: 'CXE-6700',
                        city: 'Catanduva',
                        state: 'SP',

                    },

                },

                bopm: '1212',
                bopc: '3434',

                patrimonyID: String(patrimonyID),
                   
            },

            include: {
                involve: true,
                car: true,
                reportImages: true,

            },

        });

        return response.json(report);
    
    },

    async pictures(request: Request, response: Response) {
        const { idReport } = request.params;

        const report = Array.isArray(idReport) ? idReport[0] : idReport;

        if (!report) {
            return response.status(400).json({ error: 'Invalid report id' });

        };

        const image = await prisma.reportImages.create({
            data: {
                path: `${idReport}/teste2.jpg`,
                reportID: report,

            },
        
        });

        return response.json(image);
        
    },

    
};