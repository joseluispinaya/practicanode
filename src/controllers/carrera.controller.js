import { Carrera } from '../models/Carrera.model.js';
import logger from '../logs/logger.js';


async function createCarrera(req, res) {
    try {
        const { nombrecarrera } = req.body;
        const carrera = await Carrera.create({ nombrecarrera });
        res.json(carrera);
    } catch (error) {
        logger.error(`Error createCarrera: ${error.message}`);
        res.status(400).json({ message: 'Error al crear carrera' });
    }
}

async function getCarreras(req, res) {
    try {
        const carreras = await Carrera.findAll();
        res.json(carreras);
    } catch (error) {
        logger.error(`Error getCarreras: ${error.message}`);
        res.status(500).json({ message: 'Error al obtener carreras' });
    }
}

async function updateCarrera(req, res) {
    const { id } = req.params;
    const { nombrecarrera } = req.body;
    try {
        if (!nombrecarrera)
            return res
                .status(400)
                .json({ message: 'Debe enviar los datos correctos' });
        const carrera = await Carrera.update(
            {
                nombrecarrera
            },
            {
                where: { id },
            },
        );
        res.json(carrera)
    } catch (error) {
        logger.error(`Error getCarrera: ${error.message}`);
        res.status(500).json({ message: 'Error al actualizar carrera' });
    }
}

async function deleteCarrera(req, res) {
    const { id } = req.params;
    try {
        const carrera = await Carrera.findByPk(id);
        if (!carrera) {
            return res.status(404).json({ message: 'Carrera no encontrado' });
        }
        await carrera.destroy();
        res.json({ message: 'Carrera eliminado exitosamente' });
    } catch (error) {
        logger.error(`Error deleteCarrera: ${error.message}`);
        res.status(500).json({ message: 'Error al eliminar carrera' });
    }
}


export default {
    createCarrera,
    getCarreras,
    updateCarrera,
    deleteCarrera,
}