CREATE TABLE `Users` (
`id` int(8) UNSIGNED NOT NULL AUTO_INCREMENT,
`username` varchar(20) NOT NULL,
`nickname` varchar(20) NULL,
`password` varchar(30) NOT NULL,
`email` varchar(20) NULL,
`mobile` char(11) NULL,
`gender` tinyint(1) NULL DEFAULT 0,
`birthdate` date NULL,
PRIMARY KEY (`id`)
);
CREATE TABLE `UserAddress` (
`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
`user_id` int UNSIGNED NOT NULL,
`username` varchar(20) NULL,
`mobile` char(11) NULL,
`address` varchar(60) NULL,
`is_default` tinyint UNSIGNED NOT NULL DEFAULT 0 COMMENT '0-否 1-是',
`create_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
`update_time` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
);
CREATE TABLE `Products` (
`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
`sn` varchar(20) NOT NULL,
`name` varchar(20) NOT NULL,
`img` varchar(255) NULL,
`qty` float ZEROFILL NULL,
`unit` varchar(10) NULL,
`price` float NULL,
`desc` text NULL,
`create_time` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
`update_time` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
);
CREATE TABLE `Orders` (
`id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '订单ID',
`order_no` varchar(0) NOT NULL COMMENT '订单编号',
`user_id` int NOT NULL COMMENT '用户ID',
`status` tinyint NOT NULL COMMENT '订单状态 -3:用户拒收 -2:未付款的订单 -1：用户取消 0:待发货 1:配送中 2:用户确认收货',
`total` float NOT NULL COMMENT '订单总价',
`pay_type` tinyint NOT NULL COMMENT '支付方式 0-在线支付 1-货到付款',
`pay_from` tinyint NOT NULL COMMENT '支付来源 1:支付宝，2：微信',
`remark` varchar(255) NULL COMMENT '备注信息',
`username` varchar(20) NOT NULL COMMENT '客户姓名',
`address` varchar(60) NOT NULL COMMENT '配送地址',
`mobile` char(11) NOT NULL COMMENT '客户手机号码',
`order_from` varchar(255) CHARACTER SET armscii8 NULL,
`create_time` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
);
CREATE TABLE `OrderProducts` (
`order_id` int NULL,
`prod_id` int NULL,
`prod_name` varchar(40) NULL,
`prod_price` float NULL,
`prod_unit` varchar(10) NULL,
`order_qty` float NULL
);

ALTER TABLE `Orders` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);
ALTER TABLE `OrderProducts` ADD FOREIGN KEY (`order_id`) REFERENCES `Orders` (`id`);
ALTER TABLE `OrderProducts` ADD FOREIGN KEY (`prod_id`) REFERENCES `Products` (`id`);
ALTER TABLE `UserAddress` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

