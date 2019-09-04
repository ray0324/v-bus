import * as dotenv from 'dotenv';

dotenv.config();

export default {
  // jwt密钥
  jwtSecret: process.env.JWT_SECRET,

  // 服务配置
  serve: {
    port: process.env.PORT,
  },

  // 数据库配置
  db: {
    dialect: 'mysql',
    port: 3306,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    pool: { max: 5, min: 0, idle: 10000 },
    logging: true,
  },

  // log4js日志配置
  log4js: {
    appenders: {
      stdout: { type: 'stdout' },
      app: { type: 'dateFile', filename: './log/app.log' },
    },
    categories: {
      default: { appenders: ['app'], level: process.env.LOG_LEVEL },
      debug: { appenders: ['stdout'], level: process.env.LOG_LEVEL },
    },
  },
};
