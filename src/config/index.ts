import local from './config.local';
import dev from './config.dev';
import prod from './config.prod';

let config =
  (process.env.NODE_ENV === 'local' && local) ||
  (process.env.NODE_ENV === 'development' && dev) ||
  prod;

export default config;
