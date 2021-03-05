# Drive Music Player - Server

API for Drive Music Player

## Getting started

1. Run `npm install`
2. Clone the `.env.example` file and rename to `.env`
3. Set all values for the entire keys in `.env` file
4. Run `npm run start`

## Run for production

1. Clone the `.env.example` file and rename to `.env`. Change all values.
2. Create an `app.yaml` file with single key value:

```
runtime: nodejs10
```

3. The project is configured to deploy in Google Cloud App Engine. If you use a different host, change the host property value in `src/db/config/config.js`.

```js
...
production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // host: process.env.DB_HOSTNAME, // <-- Uncomment if your host support ip database connection
    dialect: "mysql",
    host: "/cloudsql/" + process.env.DB_INSTANCE_NAME, // <-- Delete if not needed
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: { // <-- Delete if not needed
      // e.g. socketPath: '/cloudsql/my-awesome-project:us-central1:my-cloud-sql-instance'
      // same as host string above
      socketPath: "/cloudsql/" + process.env.DB_INSTANCE_NAME,
    },
  },

...
```

4. Finally, run `npm run start`. If you use Google Cloud Host, you can preview the app only; to deploy use:

```
gcloud app deploy
```

Remember select a project and bucket.

## Dependencies
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Body Parser](https://www.npmjs.com/package/body-parser)
- [Connect History Api Fallback](https://www.npmjs.com/package/connect-history-api-fallback)
- [Cors](https://www.npmjs.com/package/cors)
- [Crypto](https://www.npmjs.com/package/crypto) *DEPRECATED*
- [Dot Env](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [Json Web Token](https://www.npmjs.com/package/json-web-token)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Node Fetch](https://www.npmjs.com/package/node-fetch)
- [Nodemailer](https://www.npmjs.com/package/nodemailer)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Sequelize CLI](https://www.npmjs.com/package/sequelize-cli)