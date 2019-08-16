import * as log4js from 'log4js';
import config from '../config';

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'dateFile', filename: './log/app.log' },
  },
  categories: {
    default: { appenders: ['app'], level: config.logLevel },
  },
});

const logger = log4js.getLogger();

export { logger as default };
