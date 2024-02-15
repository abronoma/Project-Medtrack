import { Router } from 'express'
import { addDrug, deleteDrug, getDrug, getDrugs, updateDrug } from '../controller/pharmController.js'

const router = Router()

router.get('/getDrugs', getDrugs)
router.get('/getDrug/:id', getDrug)
router.post('/addDrug', addDrug)
router.put('/updateDrug/:id', updateDrug)
router.delete('/deleteDrug/:id', deleteDrug)

export default router