CREATE TABLE `order_products` (
`order_id` int(11) NULL DEFAULT NULL,
`prod_id` int(11) NULL DEFAULT NULL,
`prod_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
`prod_price` float NULL DEFAULT NULL,
`prod_unit` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
`order_qty` float NULL DEFAULT NULL
)
ENGINE = InnoDB
AUTO_INCREMENT = 0
AVG_ROW_LENGTH = 0
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci
KEY_BLOCK_SIZE = 0
MAX_ROWS = 0
MIN_ROWS = 0
ROW_FORMAT = Dynamic;
CREATE TABLE `orders` (
`id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '订单ID',
`order_no` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '订单编号',
`user_id` int(11) NOT NULL COMMENT '用户ID',
`status` tinyint(4) NOT NULL COMMENT '订单状态 -3:用户拒收 -2:未付款的订单 -1：用户取消 0:待发货 1:配送中 2:用户确认收货',
`total` float NOT NULL COMMENT '订单总价',
`pay_type` tinyint(4) NOT NULL COMMENT '支付方式 0-在线支付 1-货到付款',
`pay_from` tinyint(4) NOT NULL COMMENT '支付来源 1:支付宝，2：微信',
`remark` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注信息',
`username` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '客户姓名',
`address` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '配送地址',
`mobile` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '客户手机号码',
`order_from` varchar(256) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL,
`create_time` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`) 
)
ENGINE = InnoDB
AUTO_INCREMENT = 1
AVG_ROW_LENGTH = 0
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci
KEY_BLOCK_SIZE = 0
MAX_ROWS = 0
MIN_ROWS = 0
ROW_FORMAT = Dynamic;
CREATE TABLE `products` (
`id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`cat_id` int UNSIGNED NULL,
`sn` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
`name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
`img` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
`qty` float NOT NULL,
`unit` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
`price` float NULL DEFAULT NULL,
`desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
`create_time` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
`update_time` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`) 
)
ENGINE = InnoDB
AUTO_INCREMENT = 0
AVG_ROW_LENGTH = 0
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci
KEY_BLOCK_SIZE = 0
MAX_ROWS = 0
MIN_ROWS = 0
ROW_FORMAT = Dynamic;
CREATE TABLE `user_addr` (
`id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`user_id` int(10) UNSIGNED NOT NULL,
`username` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
`mobile` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
`address` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
`is_default` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '0-否 1-是',
`create_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
`update_time` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`) 
)
ENGINE = InnoDB
AUTO_INCREMENT = 0
AVG_ROW_LENGTH = 0
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci
KEY_BLOCK_SIZE = 0
MAX_ROWS = 0
MIN_ROWS = 0
ROW_FORMAT = Dynamic;
CREATE TABLE `users` (
`id` int(8) UNSIGNED NOT NULL AUTO_INCREMENT,
`username` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
`nickname` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
`password` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
`email` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
`mobile` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
`gender` tinyint(1) NULL DEFAULT 0,
`birthdate` date NULL DEFAULT NULL,
PRIMARY KEY (`id`) 
)
ENGINE = InnoDB
AUTO_INCREMENT = 1
AVG_ROW_LENGTH = 0
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci
KEY_BLOCK_SIZE = 0
MAX_ROWS = 0
MIN_ROWS = 0
ROW_FORMAT = Dynamic;
CREATE TABLE `categories` (
`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
`pid` int UNSIGNED NOT NULL,
`name` varchar(32) NULL,
PRIMARY KEY (`id`) 
);
CREATE TABLE `transaction` (
`id` int NOT NULL AUTO_INCREMENT,
`order_no` varchar(32) NOT NULL,
`user_id` int NULL,
`type` tinyint NULL,
`source` tinyint NULL,
`status` tinyint NULL,
`amount` float NULL,
`complete_time` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`) 
);
CREATE TABLE `transaction_record` (
`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
`order_no` varchar(32) NULL,
`events` varchar(256) NULL,
`result` varchar(256) NULL,
`created_at` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`) 
);
