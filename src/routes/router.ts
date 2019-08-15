import * as Router from 'koa-router';

import Product from '../models/product';
import Category from '../models/category';

let router = new Router();

// index
router.get('/', ctx => {
  ctx.body = 'API Server started!!!';
});

router.get('/api/version', ctx => {
  ctx.body = 'v1.0.0';
});

router.get('/api/db', async ctx => {
  const rst = await Category.findAll();
  console.log(Category.associations)
  ctx.body = rst;
});

router.get('/api/prod', async ctx => {
  const rst = await Product.findAll({
    mapToModel: true
  });
  ctx.body = rst;
});

export default router;
