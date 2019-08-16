// import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import router from './router';
import { User } from '../models';
import config from '../config';

import logger from '../services/logger';

function tokenForUser(user: any) {
  return jwt.sign(
    {
      uid: user.id,
      exp: Date.now() + 3600*7,
    },
    config.jwtSecret,
  );
}

// 注册
router.post('/users/register', async ctx => {
  const { username, email, password, mobile } = ctx.request.body;
  logger.debug('params:', username, email, password, mobile);
  const user = await User.create({ username, email, password, mobile });
  ctx.body = {
    token: tokenForUser(user),
  };
});
