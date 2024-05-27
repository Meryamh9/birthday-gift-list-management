# birthday-gift-list-management

## Installation avec docker Compose

Avant de commencer l'installation, assurez-vous d'avoir Docker et Docker Compose installés sur votre système. Si ce n'est pas déjà le cas, veuillez vous référer à la documentation officielle pour les instructions d'installation.

1. **Clonez ce dépôt sur votre machine locale :**

    ```bash
    git clone https://github.com/Meryamh9/birthday-gift-list-management.git
    ```

2. **Accédez au répertoire du projet :**

    ```bash
    cd birthday-gift-list-management
    ```

3. **Construisez les conteneurs Docker en utilisant Docker Compose :**

    ```bash
    docker compose up
    ```

   Cette commande va créer et démarrer les conteneurs pour le backend et le frontend, en les reliant ensemble.

4. **Une fois que les conteneurs sont en cours d'exécution, ouvrez votre navigateur web et accédez à l'URL suivante :**

    ```
    http://localhost:4200
    ```

   Cela devrait vous amener à l'interface utilisateur du projet.

## Installation avec Avec http-server
Assurez-vous d'avoir Node.js installé sur votre système. Vous pouvez le télécharger depuis le site officiel de Node.js.

1. **Clonez ce dépôt sur votre machine locale :**

    ```bash
    git clone https://github.com/Meryamh9/birthday-gift-list-management.git
    ```
2. **Accédez au répertoire du projet :**

    ```bash
    cd birthday-gift-app
    ```
3. **Installez http-server globalement (si vous ne l'avez pas déjà installé)** :
   
   ```bash
    npm install -g http-server
    ```
4. **Lancez http-server pour servir les fichiers de l'application à partir du répertoire dist** :

   ```bash
    http-server -p 8080 -c-1 ./dist/birthday-gift-app/
    ```
5. **Ouvrez votre navigateur web et accédez à l'URL suivante** :
   
   http://localhost:8080/
   
## Auteurs

- HIDASS Mariyem
