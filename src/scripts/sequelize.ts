import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import * as models from '../models';

const sequelize = new Sequelize({
  dialect: config.db.dialect as any,
  database: config.db.database,
  username: config.db.username,
  password: config.db.password,
  host: config.db.host,
  port: config.db.port,
});

sequelize.addModels(Object.keys(models).map(key => models[key]));

sequelize
  .authenticate()
  .then(() => {
    console.log('----------------------------------------');
    console.log('DATABASE √');
    console.log('    HOST     %s', config.db.host);
    console.log('    PORT     %s', config.db.port);
    console.log('    DATABASE %s', config.db.database);
    console.log('----------------------------------------');
  })
  .catch((err: Error) => {
    console.log('Unable to connect to the database:', err);
  });

export default sequelize;
