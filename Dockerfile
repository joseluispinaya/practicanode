# 1. Usar una imagen oficial de Node.js como base
FROM node:22.12.0-alpine3.19 AS base

# 2. Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar los archivos de dependencias primero para aprovechar la caché
COPY package*.json ./

# 4. Instalar las dependencias
RUN npm install

# 5. Copiar el resto del código fuente
COPY . .

# 6. Exponer el puerto 3000
EXPOSE 3000

# 7. Definir la variable de entorno para producción
# ENV NODE_ENV=production

# 8. Comando por defecto para iniciar el servidor
CMD ["node", "server.js"]
