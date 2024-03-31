# Définir la version de Node
FROM node:18-alpine as build

# Définir le répertoire du conteneur
WORKDIR /usr/src/app

# Copier package*.json pour npm install
COPY package*.json ./

# Exécuter npm clean install, y compris les dépendances de développement 
RUN npm ci

# Exécuter npm install @angular/cli
RUN npm install -g @angular/cli

# Copier tous les fichiers
COPY . .

# Exécuter ng build via npm pour créer le dossier dist
RUN npm run build --prod

# Définir nginx pour le serveur front-end
FROM nginx:1.25.4-alpine

# Copier nginx.conf dans le dossier de configuration par défaut de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier dist depuis la construction ng vers le dossier html de nginx
COPY --from=build /usr/src/app/dist/birthday-gift-app /usr/share/nginx/html