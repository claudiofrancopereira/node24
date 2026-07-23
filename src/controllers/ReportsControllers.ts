import { Request, Response } from "express";

import { prisma } from "../database/connection";













export default {
    async index(request: Request, response: Response) {
        const { idPatrimony } = request.params;

        const patrimony = Array.isArray(idPatrimony) ? idPatrimony[0] : idPatrimony;

        if (!patrimony) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };
        
        const allReports = await prisma.reports.findMany({
            where: {
                patrimonyID: patrimony,
            },
            
            include: {
                reportImages: true,
            
            },

        });
        
        return response.json(allReports);

    },

    async create(request: Request, response: Response) {
        const { idPatrimony } = request.params;

        const patrimony = Array.isArray(idPatrimony) ? idPatrimony[0] : idPatrimony;

        if (!patrimony) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };

        const report = await prisma.reports.create({
            data: {
                description: 'Grampeador 3',
                outcome: 'Devolveu 3',
                patrimonyID: patrimony,
                opened: true,
            
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

    async one(request: Request, response: Response) {  
        const { idPatrimony, idReport } = request.params;
        
        console.log(idPatrimony, idReport);

        const patrimony = Array.isArray(idPatrimony) ? idPatrimony[0] : idPatrimony;
        const report = Array.isArray(idReport) ? idReport[0] : idReport;

        if (!patrimony) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };

        if (!report) {
            return response.status(400).json({ error: 'Invalid report id' });

        };

        const onePatrimony = await prisma.reports.findFirstOrThrow({
            where: {
                patrimonyID: patrimony,
                id: report,
                
            },

            include: {
                reportImages: true,
            
            },

        });

        return response.json(onePatrimony);

    },

};