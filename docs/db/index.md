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
gender - 性别
birthdate - 出生日期
openid - 公众号openid

### Address - 用户配送地址表
---------------------------------------------
id - 地址ID
user_id - 用户ID
username - 收货人姓名
mobile - 收货人手机
address - 详细地址
is_default - 是否为默认地址
create_time - 创建时间
update_time - 更新时间

### Products - 商品表
---------------------------------------------
id - 商品ID
sn - 商品编号
name - 商品名称
img - 商品图片
qty - 库存数量
unit - 单位
price -价格
desc - 商品描述
create_time - 创建时间
update_time - 更新时间

### Orders - 订单表
---------------------------------------------
id - 订单ID
order_no - 订单编号
user_id - 用户ID
status - 订单状态 -3:用户拒收 -2:未付款的订单 -1：用户取消 0:待发货 1:配送中 2:用户确认收货
total - 总价
username - 收货人姓名
address - 收货地址
mobile - 手机号码
order_from - 订单来源 0-微信 1-小程序
create_time - 创建时间

### OrderProducts - 订单商品表
---------------------------------------------
id - 自增ID
order_id - 订单ID
prod_id - 商品ID
prod_name - 商品名称
prod_price - 商品价格
order_qty - 订购数量

### Transaction - 交易(支付)表
---------------------------------------------
id - 自增ID
order_no - 订单号
user_id - 用户ID
type - 支付类型 0 - 支付宝支付 1-微信微信
source - 支付来源 1-wx 2-app 3-web 4-小程序
amount - 支付金额
status - 支付状态 -2:异常 -1：取消 0 未完成 1已完成
complete_time - 交易完成时间

### TransactionRecord - 交易(支付)记录表
---------------------------------------------
id - 自增ID
order_no - 订单号
events - 事件详情
result - 结果详情
created_at - 生成时间
