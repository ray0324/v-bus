import * as jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import router from './router';
import { User } from '../models';
import config from '../config';
import RespError from '../utils/RespError';
import logger from '../services/logger';
import auth from '../services/auth';
import * as bcrypt from 'bcrypt';

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
    throw new RespError(-20001, '用户名或者邮箱已经存在');
  }

  const user = await User.create({ username, email, password, mobile });
  ctx.body = {
    token: tokenForUser(user),
  };
});

// 登录
router.post('/users/login', async ctx => {
  const { username, password } = ctx.request.body;

  logger.debug('params:', username, password);

  const user = await User.findOne({ where: { username } });

  if (!user) {
    throw new RespError(-20002, '用户名不存在');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new RespError(-20003, '用户密码不匹配');
  }

  ctx.body = {
    token: tokenForUser(user),
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
    throw new RespError(-20004, '未能检索到用户信息');
  }

  ctx.body = user;
});
