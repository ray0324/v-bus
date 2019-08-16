import * as Koa from 'koa';
import * as bodyParser from 'koa-body';
import router from '../routes';
import './sequelize';

import logger from '../services/logger';

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    logger.error(err.message);
    // ctx.status = 200;
    ctx.body = {
      error_no: -10001,
      error_msg: err.message,
    };
  }
});

app.use(bodyParser({ multipart: true }));

app.use(router.routes());

app.use(async ctx => {
  if (ctx.url === '/') {
    ctx.body = 'Vbus Server started.';
  }
});

export default app;
