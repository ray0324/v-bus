import * as Router from 'koa-router';

let router = new Router();

// index
router.get('/', ctx => {
  ctx.body = 'API Server started!!';
});

router.get('/api', ctx => {
  ctx.body = 'v1.0.0';
});

export default router;
