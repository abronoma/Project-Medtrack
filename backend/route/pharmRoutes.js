import { Router } from 'express'
import { getDrugs } from '../controller/pharmController.js'

const router = Router()

router.get('/getDrugs', getDrugs)

export default router