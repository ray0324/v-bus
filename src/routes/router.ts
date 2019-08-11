import * as Router from 'koa-router';

import '../models/sequelize';

let router = new Router();

// index
router.get('/', ctx => {
  ctx.body = 'API Server started!!!';
});


router.get('/api/version', ctx => {
  ctx.body = 'v1.0.0';
});

export default router;
