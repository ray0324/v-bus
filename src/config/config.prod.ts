export default {
  serve: {
    port: 5000,
  },
  db: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'vbus',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  },
};
