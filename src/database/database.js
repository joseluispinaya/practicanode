import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DB_DATABASE, // Nombre de la base de datos
    process.env.DB_USER,     // Usuario de la base de datos
    process.env.DB_PASSWORD, // Contraseña
    {
        host: process.env.DB_HOST, // Host (servidor)
        dialect: process.env.DB_DIALECT, // Dialecto (ej. 'postgres', 'mysql', etc.)
        logging: console.log, // Registro de logs
    }
);

export default sequelize;