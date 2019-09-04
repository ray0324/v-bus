import * as Koa from 'koa';
import * as bodyParser from 'koa-body';
import router from './routes';
import './models/sequelize';
import logger from './services/logger';
import config from './config';

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

const start = () => {
  let port = config.serve.port;
  let url = `http://localhost:${port}`;
  console.log('----------------------------------------');
  app.listen(port, () => {
    console.log(`app is running as ${url}`);
  });
};

start();

// export default app;


