import { Router } from 'express'
import { addDrug, deleteDrug, getDrugs, updateDrug } from '../controller/pharmController.js'

const router = Router()

router.get('/getDrugs', getDrugs)
router.post('/addDrug', addDrug)
router.put('/updateDrug/:id', updateDrug)
router.delete('/deleteDrug/:id', deleteDrug)

export default router