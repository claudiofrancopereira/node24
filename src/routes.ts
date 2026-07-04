import { Router } from 'express'

import { prisma } from './database/connection'

import PatrimonyController from './controllers/PatrimoniesController'

const router = Router()









router.get('/patrimonies', PatrimonyController.index)

export { router }