import { Cart, User, Product } from '../models';
import logger from '../services/logger';
import { CtxBody } from './context';
import router from './router';
import auth from '../services/auth';

// 查询购物车
router.get('/carts', auth, async ctx => {
  const { uid } = ctx.state.user;
  const cart = await Cart.findAll({
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

  logger.log(cart);

  (<CtxBody>ctx.body) = {
    err_msg: '查询成功',
    err_no: 0,
    data: cart,
  };
});
