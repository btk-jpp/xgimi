/*
Navicat MySQL Data Transfer

Source Server         : 数据库
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : xgimi

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2020-06-09 10:20:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `registry`
-- ----------------------------
DROP TABLE IF EXISTS `registry`;
CREATE TABLE `registry` (
  `sid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registry
-- ----------------------------
INSERT INTO `registry` VALUES ('1', 'asd1', 'cba3802d0d10dd128a8e065c2a48a78d94ed40ab', '2020-05-30 11:43:56');
INSERT INTO `registry` VALUES ('2', 'a112', '601f1889667efaebb33b8c12572835da3f027f78', '2020-05-30 15:41:57');
INSERT INTO `registry` VALUES ('3', 'aq12', '601f1889667efaebb33b8c12572835da3f027f78', '2020-06-04 16:13:43');
INSERT INTO `registry` VALUES ('4', 'acv1', '601f1889667efaebb33b8c12572835da3f027f78', '2020-06-04 16:16:11');
INSERT INTO `registry` VALUES ('5', 'acv2', '601f1889667efaebb33b8c12572835da3f027f78', '2020-06-05 14:07:34');
INSERT INTO `registry` VALUES ('6', 'acv3', '601f1889667efaebb33b8c12572835da3f027f78', '2020-06-06 16:21:14');
