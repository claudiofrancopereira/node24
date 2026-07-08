import { Router } from "express";

import PatrimonyController from './controllers/PatrimoniesController';
import ReportsController from './controllers/ReportsControllers';

const router = Router()

router.get('/patrimonies', PatrimonyController.index)

router.get('/patrimonies/:id/reports', ReportsController.index);
router.get('/patrimonies/:patrimony/reports/:report', ReportsController.one);






router.post('/patrimonies', PatrimonyController.create)
router.post('/patrimonies/:id', PatrimonyController.pictures)
router.post('/patrimonies/:id/reports', ReportsController.create);
router.post('/patrimonies/:patrimony/reports/:report', ReportsController.pictures);


export { router }