// import { Op } from 'sequelize';
import router from './router';
import { Category, Product } from '../models';
import logger from '../services/logger';

// 查询分类
router.get('/categories', async ctx => {
  const categories = await Category.findAll({
    where: { pid: 0 },
  });

  ctx.body = {
    err_msg: '查询成功',
    err_no: 0,
    data: categories,
  };
});

// 提交分类
router.post('/categories', async ctx => {
  const { catname, pid } = ctx.request.body;

  const existCat = await Category.findOne({
    where: { name: catname },
  });

  if (existCat) {
    ctx.body = {
      err_no: -30001,
      err_msg: '类别已经存在',
    };
    return;
  }

  await Category.create({ name: catname, pid: pid || 0 });

  ctx.body = {
    err_no: 0,
    err_msg: '创建成功',
  };
});

// 删除分类
router.del('/categories/:id', async ctx => {
  const { id } = ctx.params;

  logger.debug('id=%s', id);

  if (!/\d/.test(id)) {
    ctx.body = {
      err_no: -30002,
      err_msg: '参数格式错误',
    };
    return;
  }

  const existSubCat = await Category.findOne({
    where: { pid: ctx.params.id },
  });

  if (existSubCat) {
    ctx.body = {
      err_no: -30004,
      err_msg: '该类别下存在子分类',
    };
    return;
  }

  const n = await Category.destroy({ where: { id } });

  if (n <= 0) {
    ctx.body = {
      err_no: -30005,
      err_msg: '删除失败',
    };
    return;
  }

  ctx.body = {
    err_no: 0,
    err_msg: '删除成功',
  };
});

router.get('/products', async ctx => {
  const { catid } = ctx.request.query;

  logger.debug('catid:', catid);

  const products = await Product.findAll({
    include: [
      {
        model: Category,
      },
    ],
    where: catid && { cat_id: catid },
  });

  ctx.body = {
    err_no: 0,
    err_msg: '查询成功',
    data: products,
  };
});
