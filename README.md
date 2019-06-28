Dice-Roller - The DevOps Bootcamp Experience
=============================================

Welcome to "Dice-Roller."  This application is supplemental material to the Sketch Development Service's DevOps Bootcamp course.  You will use this code along with some pre-established infrastructure to hone your skills as a DevOps Engineer.


Running the App
----------------

You will need [node.js](https://nodejs.org/en/) installed on your machine.  With that in place, run

```shell
npm install
```
This will install application dependencies.  Then, to start it up, run

```shell
npm start
```

### Optional Command Line Runner ###

Another way to run the app by passing it command line arguments rather than relying on environment variables is to run it with the following command:

```shell
node app.js APP_PORT PGHOST PGPORT PGDATABASE PGUSER PGPASSWORD
 
# example
node app.js 8080 localhost 5432 postgres postgres abc123
```
 * APP_PORT: the port you want the app to listen to when you run it (defaults to 3000 (i.e. http://localhost:3000))
 * PGHOST: the server location of your [PostgreSQL](https://www.postgresql.org/) instance (typically "localhost")
 * PGPORT: the port that postgres is listening on (typically 5432)
 * PGDATABASE: the database on the server you are connecting to
 * PGUSER: the user account to use when connecting to the server
 * PGPASSWORD: the password to use when connecting to the server
