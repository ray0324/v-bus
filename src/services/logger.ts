import * as log4js from 'log4js';
import config from '../config';

log4js.configure(config.log4js);

const logger = log4js.getLogger('debug');

export { logger as default };
