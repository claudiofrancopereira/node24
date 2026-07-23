import { Router } from "express";

import PatrimonyController from './controllers/PatrimoniesController';
import ReportsController from './controllers/ReportsControllers';

const router = Router()

router.get('/patrimonies', PatrimonyController.index)

router.get('/patrimonies/:idPatrimony/reports', ReportsController.index);
router.get('/patrimonies/:idPatrimony/reports/:idReport', ReportsController.one);






router.post('/patrimonies', PatrimonyController.create)
router.post('/patrimonies/:idPatrimony/pictures', PatrimonyController.pictures)
router.post('/patrimonies/:idPatrimony/reports', ReportsController.create);
router.post('/patrimonies/:idPatrimony/reports/:idReport', ReportsController.pictures);


export { router }