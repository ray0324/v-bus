import * as jwt from 'jsonwebtoken';
import config from '../config';
import logger from './logger';

// jwt登陆认证
export default async function(ctx: any, next: any) {
  // 从 获取请求中的token
  const token = ctx.request.header.token;
  // 验证token 这里可以做时长验证
  logger.debug(token);
  const user = jwt.verify(token, config.jwtSecret);
  logger.debug(user);
  ctx.state = { user };
  await next();
}
