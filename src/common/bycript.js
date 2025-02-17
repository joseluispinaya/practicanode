import bcrypt from 'bcrypt';
import logger from '../logs/logger.js';
import 'dotenv/config'

export const encriptar = async (texto) => {
    try {
        const saltRounds = +process.env.BCRYPT_SALT_ROUNDS
        return await bcrypt.hash(texto, saltRounds)
    } catch (error) {
        logger.error(error.message);
        throw new Error('Error al encriptar');
    }
};

export const comparar = async (text, hash) => {
    try {
        return await bcrypt.compare(text, hash);
    } catch (error) {
        logger.error(error.message);
        throw new Error('Error al comparar');
    }
};