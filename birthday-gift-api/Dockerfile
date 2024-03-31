# Définir la version de Node
FROM node:18-alpine

# Définir le répertoire du conteneur
WORKDIR /usr/src/app

# Copie des fichiers package.json*
COPY package*.json ./

# Installation des dépendances npm
RUN npm install

# Installation de nodemon globalement
RUN npm install -g nodemon

# Copie de tous les fichiers du projet 
COPY . .

# Exposition du port 3000
EXPOSE 3000

# Exécution de la commande nodemon pour démarrer l'application
CMD ["nodemon", "server.js"]
