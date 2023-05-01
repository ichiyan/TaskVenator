# TaskVenator
- a gamified productivity application built using ReactJS and Laravel
- Features:
    - Registration, Login, Logout
    - Avatar Customization (upon registration)
    - To Do List 
    - Shop
    - Inventory
    - Party Tasks
    - Party Chat (in party tab)
        - To test this feature using existing accounts, log into at least two accounts using these credentials: 
            - email: gab@gmail.com, anne@gmail.com, or daves@gmail.com 
        	- password: p@ssw0rd
  

## Setting up:
1. [Clone and setup Laravel project](#setup-laravel-project)
2. [Install and setup Redis](#install-and-setup-redis)
3. [Run Node Server](#run-node-server)
4. [Start executing jobs](#start-executing-jobs)


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
3. Run redis-server.exe by directly clicking the file or via command prompt.
4. Run redis-cli.exe after successfully running the redis-server by directly clicking the file or via command prompt. Entering the `` PING `` command should return `` PONG `` if a connection is established and is still alive.


## Run Node Server

1. Copy the address/path of the server.js file located at `` root > resources > js `` .
2. Run server.

   ```
   node [insert path]\server.js
   ```

## Start Executing Jobs

1. Instruct Laravel to create an instance of the application and start executing jobs.

   ```
   php artisan queue:work
   ```

## Screenshots

![1 landing_page_hero](https://user-images.githubusercontent.com/74673566/235248899-18f65497-ba3b-4430-b382-d0c0be81a53a.png)

| | | 
|:-------------------------:|:-------------------------:|
|<img width="1604" alt="register" src="https://user-images.githubusercontent.com/74673566/235248957-b1ded6e4-38fd-4e7d-8af8-31707a534002.png"> | <img width="1604" alt="login" src="https://user-images.githubusercontent.com/74673566/235248967-00539345-470b-4077-b0c6-6cd171804dce.png">|


<img width="1604" alt="character creation" src="https://user-images.githubusercontent.com/74673566/235251707-46493b0d-3ae6-4b5e-a869-74f9658c0eb3.gif">
<img width="1604" alt="task page" src="https://user-images.githubusercontent.com/74673566/235249579-11f1fdb2-4be3-4dbc-a4a2-83648c598634.png">

<img width="1604" alt="shop" src="https://user-images.githubusercontent.com/74673566/235518427-d743d4db-ad11-43dd-aa78-06f52830fa41.gif">
<img width="1604" alt="inventory" src="https://user-images.githubusercontent.com/74673566/235252981-19bd4b41-ed01-4091-8f23-a2b2717d1345.gif">

| | | 
|:-------------------------:|:-------------------------:|
|<img width="1400" alt="create party" src="https://user-images.githubusercontent.com/74673566/235252306-6959676c-c6cc-487c-ac9e-7cdfcff40000.png"><img width="1400" alt="join party" src="https://user-images.githubusercontent.com/74673566/235252393-6f385618-76fa-4aad-9497-916c0034a073.png">| <img width="" alt="party" src="https://user-images.githubusercontent.com/74673566/235252213-e1d1009c-73d6-45e3-b736-07f28e339ff8.png">|


https://user-images.githubusercontent.com/74673566/235518504-e9c2449d-def1-4c28-a066-241c5850bd33.mp4





