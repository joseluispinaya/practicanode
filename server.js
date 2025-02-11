import app from './src/app.js';
import sequelize from './src/database/database.js';
import { loadInitialData } from './src/seeders/initialData.js';

const PORT = process.env.PORT || 3000;

// Probar la conexión a la base de datos y sincronizar modelos
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente.');
        return sequelize.sync({ force: false }); // Sincronizar modelos con la base de datos
    })
    .then(async () => {
        // Cargar datos iniciales
        await loadInitialData();

        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });