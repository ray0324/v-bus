import * as jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import router from './router';
import { User } from '../models';
import config from '../config';
import logger from '../services/logger';
import auth from '../services/auth';
import * as bcrypt from 'bcrypt';
import { CtxBody } from './context';

function tokenForUser(user: any) {
  return jwt.sign(
    {
      uid: user.id,
    },
    config.jwtSecret,
  );
}

// 注册
router.post('/users/register', async ctx => {
  const { username, email, password, mobile } = ctx.request.body;

  logger.debug('params:', username, email, password, mobile);

  const existUser = await User.findOne({
    where: { [Op.or]: [{ username }, { email }] },
  });

  if (existUser) {
    (<CtxBody>ctx.body) = {
      err_no: -20001,
      err_msg: '用户名或者邮箱已经存在',
    };
    return;
  }

  const user = await User.create({ username, email, password, mobile });

  (<CtxBody>ctx.body) = {
    err_no: 0,
    err_msg: '注册成功',
    data: {
      token: tokenForUser(user),
    },
  };
});

// 登录
router.post('/users/login', async ctx => {
  const { username, password } = ctx.request.body;

  logger.debug('params:', username, password);

  const user = await User.findOne({ where: { username } });

  if (!user) {
    (<CtxBody>ctx.body) = {
      err_no: -20002,
      err_msg: '用户名不存在',
    };
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    (<CtxBody>ctx.body) = {
      err_no: -20003,
      err_msg: '用户密码不匹配',
    };
    return;
  }

  (<CtxBody>ctx.body) = {
    err_no: 0,
    err_msg: '登录成功',
    data: {
      token: tokenForUser(user),
    },
  };
});

// 用户资料
router.get('/users/profile', auth, async ctx => {
  const { uid } = ctx.state.user;

  logger.debug('params:', uid);

  const user = await User.findOne({
    attributes: [
      'username',
      'nickname',
      'email',
      'mobile',
      'gender',
      'birthdate',
    ],
    where: { id: uid },
  });

  if (!user) {
    (<CtxBody>ctx.body) = {
      err_no: -20004,
      err_msg: '未能检索到用户信息',
    };
    return;
  }

  (<CtxBody>ctx.body) = {
    err_no: 0,
    err_msg: '查询成功',
    data: user,
  };
});
