import { Request, Response } from "express";

import { prisma } from "../database/connection";













export default {
    async index(request: Request, response: Response) {
        const { id } = request.params;

        const patrimonyId = Array.isArray(id) ? id[0] : id;

        if (!patrimonyId) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };
        
        const allReports = await prisma.reports.findMany({
            where: {
                patrimonyID: patrimonyId,
            },
            
            include: {
                reportImages: true,
            
            },

        });
        
        return response.json(allReports);

    },

    async create(request: Request, response: Response) {
        const { id } = request.params;

        const patrimonyId = Array.isArray(id) ? id[0] : id;

        if (!patrimonyId) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };

        const report = await prisma.reports.create({
            data: {
                description: 'Grampeador 3',
                outcome: 'Devolveu 3',
                patrimonyID: patrimonyId,
                opened: true,
            
            },

        });

        return response.json(report);
    
    },

    async pictures(request: Request, response: Response) {
        const { patrimony, report } = request.params;

        const idPatrimony = Array.isArray(patrimony) ? patrimony[0] : patrimony;
        const idReport = Array.isArray(report) ? report[0] : report;

        
        if (!idPatrimony) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };

        if (!idReport) {
            return response.status(400).json({ error: 'Invalid report id' });

        };

        const image = await prisma.reportImages.create({
            data: {
                path: 'teste2.jpg',
                reportID: idReport,

            },
        
        });

        return response.json(image);
        
    },

    async one(request: Request, response: Response) {  
        const { patrimony, report } = request.params;

        const idPatrimony = Array.isArray(patrimony) ? patrimony[0] : patrimony;
        const idReport = Array.isArray(report) ? report[0] : report;

        if (!idPatrimony) {
            return response.status(400).json({ error: 'Invalid patrimony id' });

        };

        if (!idReport) {
            return response.status(400).json({ error: 'Invalid report id' });

        };

        const onePatrimony = await prisma.reports.findFirstOrThrow({
            where: {
                patrimonyID: idPatrimony,
                id: idReport,
                
            },

            include: {
                reportImages: true,
            
            },

        });

        return response.json(onePatrimony);

    },

};
