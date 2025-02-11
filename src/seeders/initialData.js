import { Carrera } from '../models/Carrera.model.js';
import { Estudiante } from '../models/Estudiante.model.js';
import logger from '../logs/logger.js';

export const loadInitialData = async () => {
  try {
      // Verificar si ya existen datos en la tabla Carrera
      const carrerasCount = await Carrera.count();
      if (carrerasCount === 0) {
          // Crear Carreras
          const carrera1 = await Carrera.create({
              nombrecarrera: "Ingenieria en Sistemas",
          });

          const carrera2 = await Carrera.create({
              nombrecarrera: "Ingenieria Industrial",
          });

          const carrera3 = await Carrera.create({
              nombrecarrera: "Ingenieria Civil",
          });

          logger.info('Carreras creadas exitosamente.');

          // Crear Estudiantes
          await Estudiante.create({
              nombres: "Juan Pérez",
              apellidos: "Pinaya",
              nroci: "76453233",
              codigo: "R298-4",
              correo: "jose@gmail.com",
              carreraId: carrera1.id, // Relación con Carrera
          });

          await Estudiante.create({
              nombres: "Jaime",
              apellidos: "Salas",
              nroci: "76454433",
              codigo: "R798-2",
              correo: "jaime@gmail.com",
              carreraId: carrera2.id, // Relación con Carrera
          });

          await Estudiante.create({
              nombres: "Marta",
              apellidos: "Soe",
              nroci: "7853233",
              codigo: "R548-8",
              correo: "martha@gmail.com",
              carreraId: carrera3.id, // Relación con Carrera
          });

          logger.info('Estudiantes creados exitosamente.');
      } else {
          logger.info('Los datos ya existen en la base de datos.');
      }
  } catch (error) {
      logger.error('Error al cargar datos iniciales:', error);
  }
};

/* export const loadInitialData = async () => {
    try {
      const carrerasCount = await Carrera.count();
      if (carrerasCount === 0) {
        const carrera1 = await Carrera.create({
          id: 1,
          nombrecarrera: "Ingenieria en Sistemas",
        });
  
        const carrera2 = await Carrera.create({
          id: 2,
          nombrecarrera: "Ingenieria Industrial",
        });
  
        const carrera3 = await Carrera.create({
          id: 3,
          nombrecarrera: "Ingenieria Civil",
        });

        await Estudiante.create({
          id: 1,
          nombres: "Juan Pérez",
          apellidos: "Pinaya",
          nroci: "76453233",
          codigo: "R298-4",
          correo: "jose@gmail.com",
          carreraId: carrera1.id,
        });
  
        await Estudiante.create({
          id: 2,
          nombres: "Jaime",
          apellidos: "Salas",
          nroci: "76454433",
          codigo: "R798-2",
          correo: "jaime@gmail.com",
          carreraId: carrera2.id,
        });
  
        await Estudiante.create({
          id: 3,
          nombres: "Marta",
          apellidos: "Soe",
          nroci: "7853233",
          codigo: "R548-8",
          correo: "martha@gmail.com",
          carreraId: carrera3.id,
        });
  
        console.log('Estudiantes creados exitosamente.');
      } else {
        console.log('Los datos ya existen en la base de datos.');
      }
    } catch (error) {
      console.error('Error al cargar datos iniciales:', error);
    }
  }; */
  