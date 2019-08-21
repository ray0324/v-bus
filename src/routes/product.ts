// import { Op } from 'sequelize';
import router from './router';
import { Category, Product } from '../models';
import RespError from '../utils/RespError';
import logger from '../services/logger';
// import Schema from 'validate';

router.get('/categories', async ctx => {
  const categories = await Category.findAll({
    where: { pid: 0 },
  });

  ctx.body = categories;
});

router.post('/categories', async ctx => {
  const { catname, pid } = ctx.request.body;

  const existCat = await Category.findOne({
    where: { name: catname },
  });

  if (existCat) {
    throw new RespError(-30001, '该类别已经存在');
  }

  const rst = await Category.create({ name: catname, pid: pid || 0 });
  ctx.body = rst;
});

router.del('/categories/:id', async ctx => {
  const { id } = ctx.params;

  logger.debug('id=%s', id);

  if (!/\d/.test(id)) {
    throw new RespError(-30002, '参数格式错误,请检查');
  }

  if (Number(id) <= 0) {
    throw new RespError(-30003, '不存在该ID');
  }

  const existSubCat = await Category.findOne({
    where: { pid: ctx.params.id },
  });

  if (existSubCat) {
    throw new RespError(-30004, '该类别下存在子分类,请先删除子分类');
  }

  const n = await Category.destroy({ where: { id } });

  if (n <= 0) {
    throw new RespError(-30005, '删除失败');
  }

  ctx.body = {
    error_no: 0,
    error_msg: '删除成功',
  };
});

router.get('/products', async ctx => {
  const { catid } = ctx.request.query;
  logger.debug('catid=%s', catid);

  const products = await Product.findAll({
    where: { cat_id: catid },
  });

  ctx.body = products;
});
