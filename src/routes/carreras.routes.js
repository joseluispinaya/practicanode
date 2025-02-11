import { Router } from "express";
import carrerasController from '../controllers/carrera.controller.js';

const router = Router();
router.route('/').get(carrerasController.getCarreras).post(carrerasController.createCarrera);

router
.route('/:id')
.put(carrerasController.updateCarrera)
.delete(carrerasController.deleteCarrera);

export default router;