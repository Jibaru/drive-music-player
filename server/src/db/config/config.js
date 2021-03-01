module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // host: process.env.DB_HOSTNAME,
    dialect: "mysql",
    host: "/cloudsql/" + process.env.DB_INSTANCE_NAME,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      // e.g. socketPath: '/cloudsql/my-awesome-project:us-central1:my-cloud-sql-instance'
      // same as host string above
      socketPath: "/cloudsql/" + process.env.DB_INSTANCE_NAME,
    },
  },
};
