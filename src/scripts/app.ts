import * as Koa from 'koa';
import * as bodyParser from 'koa-body';
import router from '../routes';

const app = new Koa();

app.use(bodyParser({ multipart: true }))

app.use(router.routes());

export default app;
