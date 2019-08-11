# 数据库设计

## 数据表

https://www.wstmart.net/database-952.html

### Users - 用户表
---------------------------------------------
id - 用户ID
username - 用户名称（英文ID）
nickname - 昵称
password - 密码
email - 邮箱
mobile - 手机号码
address - 地址
gender - 性别
birthdate - 出生日期
openid - 公众号openid

### UserAddress - 用户配送地址表
---------------------------------------------
id - 地址ID
user_id - 用户ID
username - 收货人姓名
mobile - 收货人地址
address - 详细地址
is_default - 是否为默认地址
create_time - 创建时间
update_time - 更新时间

### Goods - 商品表
---------------------------------------------
id - 商品ID
sn - 商品编号
name - 商品名称
img - 商品图片
quantity - 库存数量
unit - 单位
price -价格
desc - 商品描述
create_time - 创建时间
update_time - 更新时间

### Orders - 订单表
---------------------------------------------
id - 订单ID
order_no - 订单号
user_id - 用户ID
status - 订单状态 -3:用户拒收 -2:未付款的订单 -1：用户取消 0:待发货 1:配送中 2:用户确认收货
total - 总价
pay_type - 支付方是 0 - 货到付款 1-在线支付
pay_from - 支付来源 0 - 支付宝 1-微信
username - 收货人姓名
address - 收货地址
mobile - 手机号码
order_from - 订单来源 0-微信 1-小程序
create_time - 创建时间

### OrderGoods - 订单商品表
---------------------------------------------
id - 自增ID
order_id - 订单ID
goods_id - 商品ID
goods_name - 商品名称
quantity - 订购数量
goods_price - 商品价格
