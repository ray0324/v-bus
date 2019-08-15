CREATE TABLE `users` (
  `id` int(8) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` varchar(32) NOT NULL COMMENT '英文名称',
  `nickname` varchar(32) NULL COMMENT '昵称',
  `password` varchar(32) NOT NULL COMMENT '密码',
  `email` varchar(32) NULL COMMENT '邮箱',
  `mobile` char(11) NULL COMMENT '手机号',
  `gender` tinyint(1) UNSIGNED NULL DEFAULT 0 COMMENT '性别 0-无 1-男 2-女',
  `birthdate` date NULL COMMENT '出生日期',
  `created_at` datetime NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) COMMENT = '用户表';
CREATE TABLE `addresses` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int UNSIGNED NOT NULL COMMENT '用户ID',
  `username` varchar(32) NOT NULL COMMENT '用户昵称',
  `mobile` char(11) NOT NULL COMMENT '手机号码',
  `address` varchar(256) NOT NULL COMMENT '地址',
  `is_default` tinyint UNSIGNED NOT NULL DEFAULT 0 COMMENT '0-否 1-是',
  `created_at` datetime NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) COMMENT = '地址表';
CREATE TABLE `products` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `sn` varchar(20) NOT NULL COMMENT '产品编码',
  `name` varchar(20) NOT NULL COMMENT '产品名称',
  `img` varchar(512) NOT NULL COMMENT '图片地址',
  `qty` float NULL COMMENT '库存数量',
  `unit` varchar(10) NULL COMMENT '单位',
  `price` float NULL COMMENT '价格',
  `desc` text NULL COMMENT '描述',
  `create_time` datetime NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) COMMENT = '产品表';
CREATE TABLE `orders` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '订单ID',
  `order_no` varchar(32) NOT NULL COMMENT '订单编号',
  `user_id` int UNSIGNED NOT NULL COMMENT '用户ID',
  `status` tinyint NOT NULL COMMENT '订单状态 -3:用户拒收 -2:未付款的订单 -1：用户取消 0:待发货 1:配送中 2:用户确认收货',
  `total` float NOT NULL COMMENT '订单总价',
  `pay_type` tinyint NOT NULL COMMENT '支付方式 0-在线支付 1-货到付款',
  `pay_from` tinyint NOT NULL COMMENT '支付来源 1:支付宝，2：微信',
  `remark` varchar(255) NULL COMMENT '备注信息',
  `username` varchar(20) NOT NULL COMMENT '客户姓名',
  `address` varchar(60) NOT NULL COMMENT '配送地址',
  `mobile` char(11) NOT NULL COMMENT '客户手机号码',
  `order_from` varchar(255) NULL COMMENT '订单来源',
  `create_time` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) COMMENT = '订单表';
CREATE TABLE `order_products` (
  `order_id` int NULL,
  `prod_id` int NULL,
  `prod_name` varchar(40) NULL,
  `prod_price` float NULL,
  `prod_unit` varchar(10) NULL,
  `order_qty` float NULL
) COMMENT = '订单产品表';
CREATE TABLE `categories` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '类别ID',
  `pid` int UNSIGNED NOT NULL DEFAULT 0 COMMENT '父级ID',
  `name` varchar(32) NULL COMMENT '类别名称',
  PRIMARY KEY (`id`)
) COMMENT = '产品分类表';
CREATE TABLE `transactions` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '支付ID',
  `user_id` int UNSIGNED NOT NULL COMMENT '用户ID',
  `order_no` varchar(32) NOT NULL COMMENT '订单号',
  `type` tinyint NOT NULL COMMENT '支付类型 0 - 微信微信 1-支付宝支付',
  `source` tinyint NULL COMMENT '支付来源 1-wx 2-app 3-web 4-小程序',
  `amount` float NULL COMMENT ' 支付金额',
  `status` tinyint NULL COMMENT '支付状态 -2:异常 -1：取消 0 未完成 1已完成',
  `created_at` datetime NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) COMMENT = '交易表';
CREATE TABLE `transaction_records` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '记录ID',
  `order_no` varchar(32) NULL COMMENT '订单号',
  `event` varchar(512) NULL COMMENT '事件详情',
  `result` varchar(512) NULL COMMENT '结果详情'
) COMMENT = '交易记录表';
