# Utiliser une image Node.js 18
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances et installer
COPY package*.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port que Next.js utilise (3000 par défaut)
EXPOSE 3000

# Commande pour démarrer en mode développement
CMD ["npm", "run", "dev"]