## 生成过程

1. 后端生成一个随机5位数的验证码 例如: code = 12315
2. 对这个验证码加时间戳并签名
  timestamp=1566202250751
  sig = hmac(timestamp+code,appSecret),
  其中appSecret是app随机密钥,保存在应用程序中
3. 将code生成图片,并转化成base64
  base64code = Image(code);
4. 将 base64code,timestamp,sig 三个变量返回给客户端

## 验证过程

1. 用户根据base64code图片上的数字进行人工辨识 获取 verifycode = 12315
2. 用户将verifycode,timestamp,sig 传回给服务端
3. 服务端根据 sig === hmac(timestamp+verifycode,appSecret)来判断用户是否输入正确

## 问题: 同一个验证码一直能用