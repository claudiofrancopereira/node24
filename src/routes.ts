import { Router } from "express";

import PatrimonyController from './controllers/PatrimoniesController';
import ReportsController from './controllers/ReportsControllers';

const router = Router();

router.get('/patrimonies', PatrimonyController.index);
router.get('/patrimonies/:patrimonyID', PatrimonyController.show);
router.get('/patrimonies/:patrimonyID/reports', ReportsController.index);
router.get('/patrimonies/:patrimonyID/reports/:reportID', ReportsController.show);





router.post('/patrimonies', PatrimonyController.create);
router.post('/patrimonies/:patrimonyID/images', PatrimonyController.images);
router.post('/patrimonies/:patrimonyID/reports', ReportsController.create);
router.post('/patrimonies/:patrimonyID/reports/:reportID', ReportsController.pictures);

export { router };