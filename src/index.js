import app from './app.js';
import sequelize from './database/database.js';
import 'dotenv/config';
import logger from './logs/logger.js';
import { loadInitialData } from './seeders/initialData.js';
import './models/relaciones.model.js'; // Importa las relaciones entre modelos

/* async function main() {
    // Crea/modifica tablas según los modelos
    //await sequelize.sync({ alter: true });
    await sequelize.sync({ force: false });

    // Cargar datos iniciales
    await loadInitialData();

    //const port = process.env.PORT;
    // Iniciar el servidor
    const port = process.env.PORT || 3000;
    app.listen(port);
    logger.info(`Servidor esta en ${port}`);
} */
async function main() {
    try {

        await sequelize.authenticate(); // Verifica la conexión con la BD
        console.log('Conexión establecida con éxito.');
        // Sincroniza los modelos con la base de datos
        await sequelize.sync({ force: false });
        logger.info('Base de datos sincronizada correctamente.');

        // Cargar datos iniciales
        await loadInitialData();
        logger.info('Datos iniciales cargados correctamente.');

        // Iniciar el servidor
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            logger.info(`Servidor corriendo en http://localhost:${port}`);
        });

    } catch (error) {
        //logger.error('Error al iniciar la aplicación:', error);
        logger.error('Error al iniciar la aplicacion:', error.message, error.stack);
    }
}

main();