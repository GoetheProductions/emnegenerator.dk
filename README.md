# Kompanion.dk
> A social media that focuses on people and companies, 
> wanting to create public events for everyone to experience.
> The main focus is to make people go out and experience life!

## Build Stack
The main components that is used for this buildstack is:

 - node
 - mongoDb
 - mongoose
 - redux
 - react
 - sass 
 - webpack
 - npm 


#### Frontend
The frontend is build in react and redux.

#### Administration panel
The administration panel is build with Rubix, witch is also build in react

#### services
 - Heroku: Deploying the product to an online server.
 - Mlabs: Contains the actual database that the software uses.

## For Developers
```
$ git clone https://github.com/GoetheProductions/kompanion-dk.git
$ cd navigate-to-project-folder
$ npm install 
$ mongod (to connect to db locally)
$ npm start

$ npm run build
$ push to git
$ deploy to heroku
```

> Note: dont forget to set the enviroment variables:
> - MONGOLAB_URI (can be found in Herokus generated Mlabs account)
> - Path - mongoDb: (C:\Program Files\MongoDB\Server\version\bin) || npm: (C:\Users\user\AppData\Roaming\npm)


> NOTE: For future template usage:
> mLap plugin after first Heroku deploy 
> find the best way to make a 'global like' connection to the database, so that it will work across multible projects.