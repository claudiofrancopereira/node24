import { Router } from 'express'

import PatrimonyController from './controllers/PatrimoniesController'

const router = Router()

router.get('/patrimonies', PatrimonyController.index)
router.post('/patrimonies', PatrimonyController.create)
router.post('/pictures/:id', PatrimonyController.pictures)

export { router }