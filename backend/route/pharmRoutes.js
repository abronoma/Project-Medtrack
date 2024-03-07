import { Router } from 'express'
import { addDrug, deleteDrug, getDrug, getDrugs, getPrice, getUnit, updateDrug } from '../controller/pharmController.js'

const router = Router()

router.get('/getDrugs', getDrugs)
router.get('/getDrug/:id', getDrug)
router.get('/price-count', getPrice)
router.get('/unitPricing', getUnit)
router.post('/addDrug', addDrug)
router.put('/updateDrug/:id', updateDrug)
router.delete('/deleteDrug/:id', deleteDrug)

export default router