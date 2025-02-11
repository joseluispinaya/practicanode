import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DB_NAME, // Nombre de la base de datos
    process.env.DB_USER,     // Usuario de la base de datos
    process.env.DB_PASSWORD, // Contraseña
    {
        host: process.env.DB_HOST, // Host (servidor)
        port: process.env.DB_PORT,
        dialect: 'postgres', // Dialecto (ej. 'postgres', 'mysql', etc.)
    }
);

export default sequelize;