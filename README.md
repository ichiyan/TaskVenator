# TaskVenator
- A gamified productivity application built using ReactJS and Laravel.
- Note: This project is still unfinished. Workable (and partially workable) features include:
    - Registration, Login, Logout
    - Avatar Customization (upon registration)
    - Shop
    - Inventory
    - Party Tasks
    - Party Chat (in party tab)
        - To test this feature, log in to at least two accounts using these credentials: 
            - emails: gab@gmail.com, anne@gmail.com, or daves@gmail.com 
        	- password: p@ssw0rd
  

## Setting up:
1. [Clone and setup Laravel project](#setup-laravel-project)
2. [Install and setup Redis](#install-and-setup-redis)
3. [Run Node Server](#run-node-server)


## Setup Laravel Project

1. Clone the repository

   ```
   git clone https://github.com/ichiyan/TaskVenator.git
   ```
2. cd into project
3. Install composer dependencies

    ```
    composer install
    ```
4. Install npm dependencies

    ```
    npm install
    ```
5. Create a copy of .env file

    ```
    cp .env.example .env
    ```
6. Generate an app encryption key

    ```
    php artisan key:generate
    ```

7. Create an empty database for the application

8. In the .env file, add database information. Fill in the ```DB_HOST```, ```DB_PORT```, ```DB_DATABASE```, ```DB_USERNAME```, and ```DB_PASSWORD``` options to match the credentials of the database you    just created.

9. Migrate the database

    ```
    php artisan migrate
    ```
9. Seed the database

    ```
    php artisan db:seed
    ```
    
11. Run the application 
  
    ```
    php artisan serve
    ```

## Install and Setup Redis

1. Download Redis for Windows here: https://drive.google.com/drive/folders/18kGNgAUknRzqwVGQCFbLiHJk6qSpJ87j?usp=sharing
   Note: The Redis project does not officially support Windows. However, the Microsoft Open Tech group develops and maintains this Windows port targeting Win64. 
   https://redis.io/download

2. Extract the zip file.
3. Run redis-server.exe by either directly clicking the file or via command prompt.
4. Run redis-cli.exe after successfully running the redis-server by either directly clicking the file or via command prompt. Entering the `` PING `` command should return `` PONG `` if a connection is established and is still alive.

## Run Node Server

1. Copy the address/path of the server.js file located at `` root > resources > js `` .
2. Run the following commands in the terminal:

   ```
   node [insert path]\server.js
   php artisan queue:restart
   php artisan queue:work
   ```
