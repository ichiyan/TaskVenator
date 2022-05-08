# TaskVenator
- a gamified productivity application built using ReactJS and Laravel
- Note: This project is still unfinished. Workable (and partially workable) features include:
    - Registration, Login, Logout
    - Avatar Customization (upon registration)
    - Shop
    - Inventory
    - Party Tasks
    - Party Chat (in party tab)
        - To test this feature, log into at least two accounts using these credentials: 
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
7. Inside `.env` file, set the following:
    
    ```
    MAIL_MAILER=smtp
    MAIL_HOST=smtp.gmail.com
    MAIL_PORT=465
    MAIL_USERNAME=[your email address]
    MAIL_PASSWORD=[password]
    MAIL_ENCRYPTION=ssl
    MAIL_FROM_ADDRESS=[your email address]
    MAIL_FROM_NAME="${APP_NAME}"
    ```
    If wondering why `MAIL_PORT` is set to 465, read [this.](https://support.google.com/mail/answer/7126229?hl=en#zippy=%2Cstep-change-smtp-other-settings-in-your-email-client)

8. This step is very IMPORTANT. Make sure you follow.
    - Using the email address you provided above, go to [https://myaccount.google.com/security](https://myaccount.google.com/security)
    - You can either do the following:
        - If 2-step verification is off, then you should see "Less Secure Apps Access" below.
            - Turn this feature ON. 
            - Allowing less secure app access will grant this project access to your email account. This is to let the project know which email account to use when sending an email verification, i.e., taskvenator@businessmail.co.ph.
            - However, this feature will no longer be included after May 30, 2022. If you want to continue allowing access, then do the other step.
        - Using 2-step verification. This feature should be ON.
            - If this feature is OFF, then turn this ON. 
            - Follow the step and add an "App Password" at the end
            - When finished, set `MAIL_PASSWORD` using the app password
            - Read more about [this.](https://support.google.com/accounts/answer/185833?authuser=1#zippy=)

9. Create an empty database for the application

10. In the .env file, add database information. Fill in the ```DB_HOST```, ```DB_PORT```, ```DB_DATABASE```, ```DB_USERNAME```, and ```DB_PASSWORD``` options to match the credentials of the database you    just created.

11. Migrate the database

    ```
    php artisan migrate
    ```
12. Seed the database

    ```
    php artisan db:seed
    ```
    
13. Run the application 
  
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
