import * as Router from 'koa-router';

// import Product from '../models/product';
// import Category from '../models/category';
import User from '../models/user';

const router = new Router();

router.prefix('/api')

// index
router.get('/', ctx => {
  ctx.body = 'API Server started!!!';
});

// router.get('/api/version', ctx => {
//   ctx.body = 'v1.0.0';
// });

router.get('/db', async ctx => {
  const rst = await User.findAll();
  ctx.body = rst;
});

// router.get('/api/prod', async ctx => {
//   const rst = await Product.findAll({
//     include: [
//       {
//         all: true,
//       },
//     ],
//   });
//   ctx.body = rst;
// });

export default router;
