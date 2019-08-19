// import { Op } from 'sequelize';
import router from './router';
import { Category } from '../models';
import RespError from '../utils/RespError';
// import logger from '../services/logger';

router.get('/categories', async ctx => {
  const categories = await Category.findAll({
    where: { pid: 0 },
  });

  ctx.body = categories;
});

router.post('/categories', async ctx => {
  const { catname, pid } = ctx.request.body;

  const existCat = await Category.findOne({
    where:{ name: catname },
  });

  if (existCat) {
    throw new RespError(-30001, '该类别已经存在');
  }

  const rst = await Category.create({ name: catname, pid: pid || 0 });
  ctx.body = rst;
});
