import * as Koa from 'koa';
import * as bodyParser from 'koa-body';
import router from '../routes';
import '../models/sequelize';

import logger from '../services/logger';

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    logger.error(err.message);
    ctx.body = {
      error_no: err.code || -10001,
      error_msg: err.message,
    };
  }
});

app.use(bodyParser({ multipart: true }));

app.use(router.routes());

app.use(async ctx => {
  if (ctx.url === '/') {
    ctx.body = 'vbus server is started.';
  }
});

export default app;
