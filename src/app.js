import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//import { authenticateToken } from './middlewares/authenticate.middleware.js';
// Routes rutas
//import usersRoutes from './routes/users.routes.js';
//import authRoutes from './routes/auth.routes.js';
//import tasksRoutes from './routes/tasks.routes.js';
import carrerasRoutes from './routes/carreras.routes.js';

const app = express();

// Configurar CORS
const corsOptions = {
    origin: process.env.NODE_ENV === 'development' ? '*' : 'http://localhost:8080',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};


// Configurar CORS
app.use(cors(corsOptions));

// Middlewares
//app.use(morgan('dev'));
// Middlewares
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());

// Routes
//app.use('/api/login', authRoutes);
//app.use('/api/users', usersRoutes);
app.use('/api/carreras', carrerasRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack); // Registra el error en la consola
    res.status(500).json({ message: 'Algo salió mal en el servidor' });
});

export default app;