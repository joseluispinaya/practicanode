import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
//import { Estudiante } from './Estudiante.model.js';

export const Carrera = sequelize.define('Carrera', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombrecarrera: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'carreras'  // Aquí defines el nombre de la tabla de la base de datos
});

// Relación con Estudiante (una carrera tiene muchos estudiantes)
//Carrera.hasMany(Estudiante, { foreignKey: 'carreraId' });