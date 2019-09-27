import { Cart, User, Product } from '../models';
import logger from '../services/logger';
import router from './router';
import auth from '../services/auth';

// 查询购物车
router.get('/carts', auth, async ctx => {
  const { uid } = ctx.state.user;
  const carts = await Cart.findAll({
    attributes: ['prod_qty'],
    include: [
      {
        model: User,
        attributes: ['id'],
        where: {
          id: uid,
        },
      },
      {
        model: Product,
        attributes: ['id', 'name', 'img'],
      },
    ],
  });

  logger.log(carts);

  const json = carts.map((element: Cart) => {
    return {
      prod_id: element.product.id,
      prod_name: element.product.name,
      prod_img: element.product.img,
      prod_qty: element.prod_qty,
    };
  });

  ctx.body = {
    err_msg: '查询成功',
    err_no: 0,
    data: json,
  };
});

// 添加购物车
router.post('/carts', auth, async ctx => {
  const { uid } = ctx.state.user;
  const { prod_id, prod_qty } = ctx.request.body;

  const existProd = await Cart.findOne({
    where: { prod_id },
  });

  // 购物车已经存在该商品
  if (existProd) {
    const u = await Cart.update(
      {
        prod_qty: prod_qty,
      },
      {
        where: { prod_id },
      },
    );
    ctx.body =
      u[0] > 0
        ? {
            err_msg: '添加成功',
            err_no: 0,
          }
        : {
            err_msg: '添加失败',
            err_no: -40001,
          };
    return;
  }

  // 新创建一条购物车信息
  await Cart.create({ user_id: uid, prod_id, prod_qty });

  ctx.body = {
    err_msg: '添加成功',
    err_no: 0,
  };
});
