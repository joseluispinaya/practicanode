import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
//import { Carrera } from './Carrera.model.js';

export const Estudiante = sequelize.define('Estudiante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nroci: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    carreraId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'carreras', // Debe coincidir con el nombre de la tabla en BD
            key: 'id',
        },
    },
}, {
    tableName: 'estudiantes'  // Aquí defines el nombre de la tabla de la base de datos
});

// Relación: un estudiante pertenece a una carrera
//Estudiante.belongsTo(Carrera, { foreignKey: 'carreraId' });