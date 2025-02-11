import { Carrera } from './Carrera.model.js';
import { Estudiante } from './Estudiante.model.js';

// Definir las relaciones aquí
Carrera.hasMany(Estudiante, { foreignKey: 'carreraId' });
Estudiante.belongsTo(Carrera, { foreignKey: 'carreraId' });