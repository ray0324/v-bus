import * as Router from 'koa-router';

import User from '../models/user';

let router = new Router();

// index
router.get('/', ctx => {
  ctx.body = 'API Server started!!!';
});


router.get('/api/version', ctx => {
  ctx.body = 'v1.0.0';
});

router.get('/api/db', async (ctx)=>{
  const rst = await User.findAll();
  ctx.body = rst;
})


export default router;
