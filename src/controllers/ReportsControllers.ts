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
                involves: true,
                cars: true,
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
                involves: true,
                cars: true,
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
                date: new Date('2026-07-20T21:41:45.889Z'),

                vehicle: '2026',
                reportOfficer: 'CLAUDIO',

                hLocation: '12:00',
                hFinal: '13:00',

                address: 'RUA DAS PITANGAS, 330',
                nature: 'E6',
                   
                involves: {
                    create: {
                        name: 'ARTHUR SOUZA PEREIRA',
                        condition: 'AUTOR',
                        mother: 'SIMONE FERREIRA SOUZA PEREIRA',
                        father: 'CLAUDIO MANOEL DA COSTA FRANCO PEREIRA',
                        dbirth: '18/09/2017',
                        pbirth: 'CATANDUVA/SP',
                        color: 'BRANCA',
                        sex: 'MASCULINO',
                        civilStatus: 'SOLTEIRO',
                        work: 'ESTUDANTE',
                        rgcpf: '220756808-33',
                        address: 'RUA GOIAS, 1059',
                        neighborhood: 'VILA MOTTA',
                        city: 'CATANDUVA',
                        state: 'SP',
                        phone: '17-99273-5321',

                    },

                },

                cars: {
                    create: {
                        vessel: 'PAS/AUTOMOVEL',
                        makebody: 'FORD/FOCUS',
                        color: 'CINZA',
                        year: '2000',
                        plate: 'CXE-6700',
                        city: 'CATANDUVA',
                        state: 'SP',

                    },

                },

                
                description: 'GRAMPEADOR',
                outcome: 'DEVOLVEU',
                opened: true,
                
                bopm: '1212',
                bopc: '3434',

                patrimonyID: String(patrimonyID),
                   
            },

            include: {
                involves: true,
                cars: true,
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

/*

involves: {
                    create: {
                        name: 'ARTHUR SOUZA PEREIRA',
                        condition: 'AUTOR',
                        mother: 'SIMONE FERREIRA SOUZA PEREIRA',
                        father: 'CLAUDIO MANOEL DA COSTA FRANCO PEREIRA',
                        dbirth: '18/09/2017',
                        pbirth: 'CATANDUVA/SP',
                        color: 'BRANCA',
                        sex: 'MASCULINO',
                        civilStatus: 'SOLTEIRO',
                        work: 'ESTUDANTE',
                        rgcpf: '220756808-33',
                        address: 'RUA GOIAS, 1059',
                        neighborhood: 'VILA MOTTA',
                        city: 'CATANDUVA',
                        state: 'SP',
                        phone: '17-99273-5321',

                    },

                },


cars: {
                    create: {
                        vessel: 'PAS/AUTOMOVEL',
                        makebody: 'FORD/FOCUS',
                        color: 'CINZA',
                        year: '2000',
                        plate: 'CXE-6700',
                        city: 'CATANDUVA',
                        state: 'SP',

                    },

                },

*/                