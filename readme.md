# VTYS Project Fall Semester 2021

### Group 7

###### 152120171097 Kumbukani Kamanga

###### 15212071006 Yavuz Uçarkuş

###### 152120161058 Başak Akalın

###### 152120171044 Ayşegül Kadem

###### 152120171075 Hager Hamza

### Instructions for installing the headless CMS in order to use the database.

#### Prequisites:

- nodeJS
- StrapiJS
- yarn or npm
- gitbash

### Step 1 - Download and install prerequisites

[Download](https://git-scm.com/downloads) and install git.

[Download](https://nodejs.org/en/download/) and install nodeJS.

#### Steps for installing Strapi.js

1. open the gitbash terminal
2. type the command 'npm i strapi -g' (if you are using yarn, type 'yarn add strapi')

### Step 2 - Running Strapi and the databse.

1. Navigate into the 'schooldb' folder in this repo
2. If it is the first time running the app on your system, type the command 'npm install' (if you are using yarn, type 'yarn install'). If it is not the first time, skip to step 3.
3. type the command 'npm run develop' (if you are using yarn, type 'yarn develop')
4. Open your broswer and navigate to http://localhost:1337/admin
5. Either create an admin user or log in with your previously created user.
6. Now the server is up and running and so is the database. You may start the Windows Form App which will consume the API hosted on the server we just started.
