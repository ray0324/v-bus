// import { Op } from 'sequelize';
import router from './router';
import { Category } from '../models';
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

  if (id !== '0') {
    const existSubCat = await Category.findOne({
      where: { pid: ctx.params.id },
    });

    if (existSubCat) {
      throw new RespError(-30003, '该类别下存在子分类,请先删除子分类');
    }
  }

  const result = await Category.destroy({ where: { id } });

  ctx.body = result;
});
