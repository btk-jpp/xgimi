/*
Navicat MySQL Data Transfer

Source Server         : 数据库
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : xgimi

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2020-06-09 10:19:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `indexgoods`
-- ----------------------------
DROP TABLE IF EXISTS `indexgoods`;
CREATE TABLE `indexgoods` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `mtitle` varchar(999) NOT NULL,
  `title` varchar(200) NOT NULL,
  `url` varchar(999) NOT NULL,
  `urllist` varchar(999) NOT NULL,
  `description` varchar(999) NOT NULL,
  `price` float(7,2) unsigned NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indexgoods
-- ----------------------------
INSERT INTO `indexgoods` VALUES ('1', '激光电视', '极米激光电视 矅·LUNE Pro', 'https://file02.xgimi.com/official/admin/20190409/2019040916295642900.jpg', 'https://file02.xgimi.com/official/admin/20190926/2019092609211280466.jpg', '重新定义万元级激光电视', '23999.00');
INSERT INTO `indexgoods` VALUES ('2', '激光电视', '极米 A2', 'https://file02.xgimi.com/official/admin/20191008/2019100815441815417.jpg', 'https://file02.xgimi.com/official/admin/20190926/2019092609211280466.jpg', '找回打开电视的热情', '20999.00');
INSERT INTO `indexgoods` VALUES ('3', '激光电视', '极米 A2 Pro', 'https://file02.xgimi.com/official/admin/20191018/2019101810394654526.jpg', 'https://file02.xgimi.com/official/admin/20190930/2019093015523171086.jpg', '突破眼界 大有格局', '34999.00');
INSERT INTO `indexgoods` VALUES ('4', '激光电视', '极米 T1', 'https://file02.xgimi.com/official/admin/20190514/2019051418024538300.jpg', 'https://file02.xgimi.com/official/admin/20190122/2019012219074031949.jpg', '重新定义人生赢家', '79999.00');
INSERT INTO `indexgoods` VALUES ('5', '激光电视', '极米 矅·LUNE 4K Pro', 'https://file02.xgimi.com/official/admin/20190514/2019051418022488003.jpg', 'https://file02.xgimi.com/official/admin/20190820/2019082016455671957.jpg', '百吋4K 专业画质', '21999.00');
INSERT INTO `indexgoods` VALUES ('6', '激光电视', '极米100英寸超短焦菲涅尔抗光硬幕', 'https://file02.xgimi.com/official/admin/20190124/2019012414555669404.jpg', 'https://file02.xgimi.com/official/admin/20190124/2019012414555669404.jpg', '纤薄面板设计/聚光结构更高增益', '6999.00');
INSERT INTO `indexgoods` VALUES ('7', '激光电视', '极米 皓·LUNE 4K', 'https://file02.xgimi.com/official/admin/20190123/2019012315500740150.jpg', 'https://file02.xgimi.com/official/admin/20190123/2019012315500740150.jpg', '万元级超百吋4K激光电视', '10999.00');
INSERT INTO `indexgoods` VALUES ('8', '家用娱乐', '极米 RS Pro', 'https://file02.xgimi.com/official/admin/20190822/2019082216300622585.jpg', 'https://file02.xgimi.com/official/admin/20190822/2019082216300622585.jpg', '极米 RS Pro', '8999.00');
INSERT INTO `indexgoods` VALUES ('9', '家用电视', '极米 H3', 'https://file02.xgimi.com/official/admin/20200221/2020022115473113160.jpg', 'https://file02.xgimi.com/official/admin/20190813/2019081315272675047.jpg', '极米H3，名不虚传', '4799.00');
INSERT INTO `indexgoods` VALUES ('10', '家用电视', '极米 Z8X', 'https://file02.xgimi.com/official/admin/20200221/2020022115531734372.jpg', 'https://file02.xgimi.com/official/admin/20190813/2019081315383374442.jpg', '1080P重磅新品', '3299.00');
INSERT INTO `indexgoods` VALUES ('11', '家用电视', '新一代 Z6X', 'https://file02.xgimi.com/official/admin/20191021/2019102109275037502.jpg', 'https://file02.xgimi.com/official/admin/20191021/2019102109275658981.jpg', '曜黑之作 亮出不凡', '2898.00');
INSERT INTO `indexgoods` VALUES ('12', '家用电视', '极米120英寸16：10遥控幕布', 'https://file02.xgimi.com/official/admin/20200106/2020010617590751323.jpg', 'https://file02.xgimi.com/official/admin/20200106/2020010617590751323.jpg', '电动静音调控，收放自如', '899.00');
INSERT INTO `indexgoods` VALUES ('13', '家用电视', '极米K歌无线麦克风C2', 'https://file02.xgimi.com/official/admin/20190124/2019012414571715412.jpg', 'https://file02.xgimi.com/official/admin/20190124/2019012414571715412.jpg', '高灵敏麦头 收音防干扰', '599.00');
INSERT INTO `indexgoods` VALUES ('14', '家用电视', '极米吊顶支架（C225B）', 'https://file02.xgimi.com/official/admin/20190124/2019012415290135741.jpg', 'https://file02.xgimi.com/official/admin/20190124/2019012415290135741.jpg', '独立云台/模块化结构', '199.00');

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

-- ----------------------------
-- Table structure for `xgimigoods`
-- ----------------------------
DROP TABLE IF EXISTS `xgimigoods`;
CREATE TABLE `xgimigoods` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(999) NOT NULL,
  `title` varchar(200) NOT NULL,
  `price` float(7,2) unsigned NOT NULL,
  `sailnumber` varchar(999) NOT NULL,
  `piclisturl` varchar(999) DEFAULT NULL,
  `depict` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xgimigoods
-- ----------------------------
INSERT INTO `xgimigoods` VALUES ('1', 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560230039.28979252.jpg?https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2945894567/O1CN01xNBFJt1jbjQiHo5ff_!!2945894567.jpg_430x430q90.jpg', '极米 RS Pro', '2999.00', '1522', 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2945894567/O1CN01HhJr551jbjQkhrFfl_!!2945894567.jpg_430x430q90.jpg,https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2945894567/O1CN01ye1w821jbjQjMyRje_!!2945894567.jpg_430x430q90.jpg,//img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2945894567/O1CN012izlGu1jbjR01NwbT_!!2945894567.jpg_60x60q90.jpg,http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560230039.28979252.jpg?https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2945894567/O1CN01xNBFJt1jbjQiHo5ff_!!2945894567.jpg_430x430q90.jpg,https://file02.xgimi.com/official/admin/20190123/2019012315283456696.jpg,https://file02.xgimi.com/official/admin/20190828/2019082816343272609.jpg', '预售，下单后7-15个工作日发货。[感官革命|几何哲学|灵犀设计] 4900流明光源亮度/4K级超清大师画质/4K级光学变焦画面无损缩放/4K级硬件梯形校正/4K级全局MEMC/哈曼卡顿音响品纯甄天籁.');
INSERT INTO `xgimigoods` VALUES ('2', 'https://img.alicdn.com/imgextra/i1/1699528484/O1CN01ikwwjr2CXioynkCXl_!!1699528484.jpg_430x430q90.jpg', '极米 Z8X', '5999.00', '2222', 'https://img.alicdn.com/imgextra/i1/1699528484/O1CN01EW5Dcl2CXioOonuYy_!!1699528484.jpg_430x430q90.jpg,https://img.alicdn.com/imgextra/i4/1699528484/O1CN01zrJHFa2CXioK7aaVc_!!1699528484.jpg_430x430q90.jpg,https://img.alicdn.com/imgextra/i3/1699528484/O1CN01EELzCS2CXioK7YqPE_!!1699528484.jpg_430x430q90.jpg,https://img.alicdn.com/imgextra/i4/1699528484/O1CN01Lp0zZ42CXioSklyNx_!!0-item_pic.jpg_430x430q90.jpg', '超越经典/1900 ANSI流明/分离式散热设计/TOF激光无感对焦/自动梯形校正/哈曼卡顿音响/MEMC+运动补偿/真彩还原');
INSERT INTO `xgimigoods` VALUES ('3', 'https://img.alicdn.com/imgextra/i3/2204113094613/O1CN01WtuiPb1jwncDjH4XW_!!0-item_pic.jpg_430x430q90.jpg', '极米 H3', '3599.00', '3322', 'https://img.alicdn.com/imgextra/i3/2204113094613/O1CN01Lcg47s1jwnbTXu9Yn_!!0-item_pic.jpg_430x430q90.jpg,https://img.alicdn.com/imgextra/i3/2204113094613/O1CN01gpbRuH1jwnbSq2bct_!!2204113094613.jpg_430x430q90.jpg,https://img.alicdn.com/imgextra/i4/2204113094613/O1CN01SGhGtU1jwnbWojaOu_!!2204113094613.jpg_430x430q90.jpg', '1080P全高清/1200 ANSI流明/纳米级金圈镜片/四方梯形校正/哈曼卡顿音响/MEMC+运动补偿、HDR10+HLG/全画面自动对焦.');
INSERT INTO `xgimigoods` VALUES ('4', 'https://img.alicdn.com/bao/uploaded/i3/110713146/O1CN01mxyc7H1Z6ubjKHiO2_!!0-https://img.alicdn.com/imgextra/i2/2204113094613/O1CN01gXArdM1jwndI0L20Y_!!0-item_pic.jpg_430x430q90.jpg', '极米 A2（100英寸硬幕套装版）', '9999.00', '112222', 'https://img.alicdn.com/imgextra/i2/2204113094613/O1CN01RnTBOY1jwndGhYvma_!!2204113094613.jpg_430x430q90.jpg,https://img.alicdn.com/imgextra/i3/2204113094613/O1CN01TxBlc71jwndMfjrv4_!!2204113094613.jpg_430x430q90.jpg,https://img.alicdn.com/imgextra/i3/2204113094613/O1CN01XHHXs41jwndKGhgEb_!!2204113094613.jpg_430x430q90.jpg', '已有45人评论');
INSERT INTO `xgimigoods` VALUES ('5', 'https://file02.xgimi.com/official/admin/20190123/2019012315500740150.jpg', ' 极米 皓·LUNE 4K ', '11999.00', '55222', 'https://file02.xgimi.com/official/admin/20190123/2019012315283674487.jpg ', '<货>真4K激光电视/2200ANSI流明/运动补偿技术/极米AI/哈曼卡顿音响/80-150英寸大屏/4K超高清超短焦/全新8点梯形校正.');
INSERT INTO `xgimigoods` VALUES ('6', 'https://file02.xgimi.com/official/admin/20191018/2019101810394654526.jpg', ' 极米 A2 Pro ', '34999.00', '12333', 'https://file02.xgimi.com/official/admin/20191018/2019101810401457099.jpg,https://file02.xgimi.com/official/admin/20190930/2019093015462440656.png,https://file02.xgimi.com/official/admin/20190930/2019093015462736991.png,https://file02.xgimi.com/official/admin/20190930/2019093015462955083.png', '极米 A2 Pro（DNP硬幕套装版）');
INSERT INTO `xgimigoods` VALUES ('7', ' https://file02.xgimi.com/official/admin/20191008/2019100815441815417.jpg', ' 极米 A2 ', '20999.00', '22244', 'https://file02.xgimi.com/official/admin/20191008/2019100815425188136.jpg,https://file02.xgimi.com/official/admin/20191008/2019100815424918170.jpg,https://file02.xgimi.com/official/admin/20191008/2019100815424721689.jpg', '极米 A2（100英寸硬幕套装版）');
INSERT INTO `xgimigoods` VALUES ('8', 'https://file02.xgimi.com/official/admin/20190409/2019040916295642900.jpg', ' 极米 矅·LUNE Pro ', '23999.00', '1232122', 'https://file02.xgimi.com/official/admin/20190409/2019040916193147734.jpg,https://file02.xgimi.com/official/admin/20190409/2019040916193147734.jpg,https://file02.xgimi.com/official/admin/20190409/2019040916193429491.jpg,https://file02.xgimi.com/official/admin/20190826/2019082610072641504.jpg', '3000ANSI流明/80-150英寸大屏/哈曼卡顿音响/极米AI/画面运动补偿/HDR 10解码.');
INSERT INTO `xgimigoods` VALUES ('9', 'https://file02.xgimi.com/official/admin/20190514/2019051418022488003.jpg', ' 极米 矅·LUNE 4K Pro ', '21999.00', '11111', 'https://file02.xgimi.com/official/admin/20190425/2019042516212369423.jpg,https://file02.xgimi.com/official/admin/20200407/2020040714253654023.jpg,https://file02.xgimi.com/official/admin/20200407/2020040714254282541.jpg,https://file02.xgimi.com/official/admin/20200407/2020040714254667035.jpg', '百英寸4K专业画质/4K超高清超短焦/2600ANSI流明/P3超广色域/原彩色轮100%色彩亮度/运动补偿+HDR/Harman Kardon原装音响/极米AI智能/8点梯形校正/一拍画幕对齐.（温馨提示：套餐内幕布下单后3-7个工作日内发货）');
INSERT INTO `xgimigoods` VALUES ('10', 'https://file02.xgimi.com/official/admin/20190514/2019051418024538300.jpg', ' 极米 T1 ', '76999.00', '2222', 'https://file02.xgimi.com/official/admin/20190514/2019051418024538300.jpg', '4000ANSI流明/Harman Kardon量身定制/VIP专属服务/标配2副激光电视专用3D眼镜.');
INSERT INTO `xgimigoods` VALUES ('11', 'https://file02.xgimi.com/official/admin/20190822/2019082216300622585.jpg', ' 极米 RS Pro ', '8999.00', '222333', 'https://file02.xgimi.com/official/admin/20190514/2019051418024538300.jpg', '预售，下单后7-15个工作日发货。[感官革命|几何哲学|灵犀设计] 4900流明光源亮度/4K级超清大师画质/4K级光学变焦画面无损缩放/4K级硬件梯形校正/4K级全局MEMC/哈曼卡顿音响品纯甄天籁.');
INSERT INTO `xgimigoods` VALUES ('12', 'https://file02.xgimi.com/official/admin/20191021/2019102109275037502.jpg', ' 新一代 Z6X ', '2999.00', '111', 'https://file02.xgimi.com/official/admin/20200531/2020053123593780505.jpg,https://file02.xgimi.com/official/admin/20191021/2019102109223425447.jpg,https://file02.xgimi.com/official/admin/20191021/2019102109224291543.jpg,https://file02.xgimi.com/official/admin/20191021/2019102109224543074.jpg', '[入门级全能机型] 800ANSI流明/16GB存储/运动补偿提速/系统升级');
INSERT INTO `xgimigoods` VALUES ('13', 'https://file02.xgimi.com/official/admin/20200221/2020022115473113160.jpg', ' 极米 H3 ', '4799.00', '2333', 'https://file02.xgimi.com/official/admin/20200221/2020022115473113160.jpg', '超越经典/1900 ANSI流明/分离式散热设计/TOF激光无感对焦/自动梯形校正/哈曼卡顿音响/MEMC+运动补偿/真彩还原.');
INSERT INTO `xgimigoods` VALUES ('14', 'https://file02.xgimi.com/official/admin/20200221/2020022115531734372.jpg', ' 极米 Z8X ', '3299.00', '2223', 'https://file02.xgimi.com/official/admin/20190920/2019092011155365439.jpg,https://file02.xgimi.com/official/admin/20190920/2019092011155834174.jpg,https://file02.xgimi.com/official/admin/20190920/2019092011161030384.jpg,https://file02.xgimi.com/official/admin/20190920/2019092011160687876.jpg ', '1080P全高清/1200 ANSI流明/纳米级金圈镜片/四方梯形校正/哈曼卡顿音响/MEMC+运动补偿、HDR10+HLG/全画面自动对焦.\r\n\r\n1080P全高清/1200 ANSI流明/纳米级金圈镜片/四方梯形校正/哈曼卡顿音响/MEMC+运动补偿、HDR10+HLG/全画面自动对焦.');
INSERT INTO `xgimigoods` VALUES ('15', 'https://file02.xgimi.com/official/admin/20190124/2019012415043560942.jpg', ' 极米N20 ', '5999.00', '222', 'https://file02.xgimi.com/official/admin/20190307/2019030710240580367.jpg,https://file02.xgimi.com/official/admin/20190828/2019082817031987409.jpg,https://file02.xgimi.com/official/admin/20190307/2019030710240761537.jpg,https://file02.xgimi.com/official/admin/20190828/2019082817032235014.jpg,https://file02.xgimi.com/official/admin/20190307/2019030710240987793.jpg,https://file02.xgimi.com/official/admin/20190828/2019082817032748615.png,https://file02.xgimi.com/official/admin/20190828/2019082817033193006.jpg,https://file02.xgimi.com/official/admin/20190828/2019082817033315754.jpg', '深空灰版本/3000流明光源亮度/1080P全高清.');
INSERT INTO `xgimigoods` VALUES ('16', 'https://file02.xgimi.com/official/admin/20190301/2019030118023231553.jpg', ' 极米Z6 ', '2299.00', '123242', null, '1080P劲爆性价比/超3米宽大屏/1080p分辨率/四通道光路技术/运动补偿技术/哈曼卡顿音响/四方梯形校正.');
INSERT INTO `xgimigoods` VALUES ('17', 'https://file02.xgimi.com/official/admin/20190121/2019012110130414073.jpg', ' 极米N10 ', '3699.00', '44332', 'https://file02.xgimi.com/official/admin/20190828/2019082816561299866.jpg ', '2000流明光源亮度/方形像素架构/HDR 10解码/全画面自动对焦.\r\n\r\n2000流明光源亮度/方形像素架构/HDR 10解码/全画面自动对焦.\r\n\r\n2000流明光源亮度/方形像素架构/HDR 10解码/全画面自动对焦. ');
INSERT INTO `xgimigoods` VALUES ('18', 'https://file02.xgimi.com/official/admin/20180813/2018081317245931932.jpg', ' 极米New Z4极光 ', '3999.00', '22333', 'https://file02.xgimi.com/official/admin/20180324/2018032416355985197.jpg,https://file02.xgimi.com/official/admin/20190828/2019082817045472504.jpg,https://file02.xgimi.com/official/admin/20180324/2018032416360747445.jpg,https://file02.xgimi.com/official/admin/20180324/2018032416361418054.jpg,https://file02.xgimi.com/official/admin/20180324/2018032416361892746.jpg,https://file02.xgimi.com/official/admin/20180324/2018032416362674273.jpg', '850ANSI流明/运动补偿技术/性能画质升级/全新人工智能系统/哈曼卡顿音响.');
INSERT INTO `xgimigoods` VALUES ('19', 'https://file02.xgimi.com/official/admin/20190828/2019082818420396103.jpg', ' 极米Play ', '2099.00', '1111', 'https://file02.xgimi.com/official/admin/20190903/2019090314295242347.jpg,https://file02.xgimi.com/official/admin/20190327/2019032711262519567.jpg,https://file02.xgimi.com/official/admin/20181031/2018103115072226663.jpg', '[高清随身影院] 内置大电池/720P物理分辨率/harman kardon/梯形校正/iF/红点奖/HDR10解码/侧投+自动对焦.');
INSERT INTO `xgimigoods` VALUES ('20', 'https://file02.xgimi.com/official/admin/20200221/2020022115595967139.jpg', ' 极米Play X ', '5299.00', '2223', 'https://file02.xgimi.com/official/admin/20190327/2019032711270456639.jpg,https://file02.xgimi.com/official/admin/20181211/2018121121223184822.jpg,https://file02.xgimi.com/official/admin/20181211/2018121121223494685.jpg', '[1080P便携音乐投影] 1080P物理分辨率/内置大电池/运动补偿+HDR/哈曼卡顿音响/全局自动对焦/四方侧投功能.');
INSERT INTO `xgimigoods` VALUES ('21', 'https://file02.xgimi.com/official/admin/20190301/2019030118030595368.jpg', ' 极米New Z4Air ', '3299.00', '1232', 'https://file02.xgimi.com/official/admin/20190828/2019082816425431283.jpg,https://file02.xgimi.com/official/admin/20180913/2018091309324970662.jpg,https://file02.xgimi.com/official/admin/20180913/2018091309325254444.jpg,https://file02.xgimi.com/official/admin/20190828/2019082816430589651.jpg,https://file02.xgimi.com/official/admin/20190828/2019082816430399984.jpg', '[便携娱乐投影仪] 轻薄设计/20%亮度提升/高清宽屏/内置大电池/新增自动对焦/轻至0.66kg，薄至23.5mm.');
INSERT INTO `xgimigoods` VALUES ('22', 'https://file02.xgimi.com/official/admin/20190301/2019030118025343514.jpg', ' 极米CC极光 ', '3699.00', '1232', 'https://file02.xgimi.com/official/admin/20190301/2019030118064789446.jpg,https://image.xgimi.com/shop/images/201702/source_img/240_P_1486601759472.jpg,https://image.xgimi.com/shop/images/201702/source_img/240_P_1486601747126.jpg,https://image.xgimi.com/shop/images/201702/source_img/240_P_1486601864358.jpg', '[枕边电影音乐会] 长时续航/JBL音响/侧投也能看/快速自动对焦/一体收纳包.');
INSERT INTO `xgimigoods` VALUES ('23', 'https://file02.xgimi.com/official/admin/20181112/2018111218301849815.jpg', ' 极米CC极光黑金版 ', '3999.00', '2312', 'https://file02.xgimi.com/official/admin/20190301/2019030118070154716.jpg,https://file02.xgimi.com/official/admin/20190828/2019082817080610819.jpg,https://file02.xgimi.com/official/admin/20190828/2019082817081183764.jpg,https://file02.xgimi.com/official/admin/20190828/2019082817082077377.jpg', '[更酷的高颜值随身影院] 长时续航/720P高清分辨率/自动对焦/左右梯形校正/支持侧投/JBL音响.');
INSERT INTO `xgimigoods` VALUES ('24', 'https://file02.xgimi.com/official/admin/20200526/2020052621472041363.jpg', ' 极米 LE120 ', '3999.00', '2123', 'https://file02.xgimi.com/official/admin/20200527/2020052710565479775.jpg ', '极米 LE120');
INSERT INTO `xgimigoods` VALUES ('25', 'https://file02.xgimi.com/official/admin/20200418/2020041815181082633.jpg', ' 极米X-Desktop Stand Pro桌面支架 ', '279.00', '231', 'https://file02.xgimi.com/official/admin/20200418/2020041815352970021.jpg,https://file02.xgimi.com/official/admin/20200418/2020041815353575882.jpg,https://file02.xgimi.com/official/admin/20200418/2020041815352455845.jpg', '下单后3-5个工作日发货，请勿催单。 收纳设计 ，水平360°旋转 ，匠心设计，兼容多样化外部设备。适配极米机型：H系列，CC系列机型（如底部无螺丝孔，需单独购买转接盘使用）');
INSERT INTO `xgimigoods` VALUES ('26', 'https://file02.xgimi.com/official/admin/20191220/2019122015311260649.jpg', ' 极米100英寸DNP16:9硬幕 ', '999.00', '232', null, '极米100英寸DNP16:9硬幕');
INSERT INTO `xgimigoods` VALUES ('27', 'https://file02.xgimi.com/official/admin/20191114/2019111418593346438.jpg', ' 极米100英寸遥控电动光子幕布 ', '799.00', '443', null, '< 温馨提示：下单后预计7个工作日内发货，请勿催单 >');
INSERT INTO `xgimigoods` VALUES ('28', 'https://file02.xgimi.com/official/admin/20190813/2019081316542317390.jpg', ' 极米落地支架焕黑版 ', '459.00', '2222', null, '极米落地支架焕黑版');
INSERT INTO `xgimigoods` VALUES ('29', 'https://file02.xgimi.com/official/admin/20190124/2019012414571715412.jpg', ' 极米K歌无线麦克风C2 ', '599.00', '2223', null, '高灵敏动圈麦头/心型收音防干扰/无线低失真传输/自动增益控制。包装清单：极米K歌无线麦克风*2+无线接收器*1。');
INSERT INTO `xgimigoods` VALUES ('30', 'https://file02.xgimi.com/official/admin/20191106/2019110614394024654.jpg', ' 极米Play安全便携包 ', '299.00', '1232', null, '防水防尘防震 EVA硬壳 遮幅式拉链 适配Play和Play特别版');
INSERT INTO `xgimigoods` VALUES ('31', 'https://file02.xgimi.com/official/admin/20190218/2019021817431755076.jpg', ' 极米120英寸16：9激光抗光幕布 ', '7999.00', '2332', null, '120英寸/降低环境光干扰/全金属边框。温馨提示：下单预计3个工作日内发货。');
INSERT INTO `xgimigoods` VALUES ('32', 'https://image.xgimi.com/shop/images/201709/source_img/96_G_1504294392801.jpg', ' 极米100英寸激光抗光软幕 ', '5999.00', '233', null, '降低环境光干扰/全金属边框。');
INSERT INTO `xgimigoods` VALUES ('33', 'https://file02.xgimi.com/official/admin/20190124/2019012414555669404.jpg', ' 极米100英寸超短焦菲涅尔抗光硬幕 ', '6999.00', '1231', null, '12mm纤薄面板设计/聚光结构更高增益/8层功能光学结构。温馨提示：下单预计3个工作日内发货');
INSERT INTO `xgimigoods` VALUES ('34', 'https://file02.xgimi.com/official/admin/20191202/2019120216443022645.png', ' 极米100英寸16:9画框幕布 ', '1299.00', '12312', null, '时尚美观/幕面平整/成像清晰/色彩饱满/安装方便，此幕布与极米任意型号激光电视不搭配');
INSERT INTO `xgimigoods` VALUES ('35', 'https://file02.xgimi.com/official/admin/20200106/2020010617590751323.jpg', ' 极米120英寸16：10遥控幕布 ', '899.00', '2132', null, '电动静音调控，收放自如。温馨提示：120英寸幕布长约3米，由于宽度较大，部分电梯无法进入。此幕布与极米任意型号激光电视不搭配。');
INSERT INTO `xgimigoods` VALUES ('36', 'https://file02.xgimi.com/official/admin/20191121/2019112116544055857.png', ' 极米100英寸16:10支架幕布 ', '399.00', '221', null, '高强度材质，经久耐用。收拢后方便携带，此幕布与极米任意型号激光电视不搭配。');
INSERT INTO `xgimigoods` VALUES ('37', 'https://file02.xgimi.com/official/admin/20180829/2018082910035342151.jpg', ' 极米便携式地拉幕布 ', '699.00', '123', null, ' 巨幕观影 轻巧免安装');
INSERT INTO `xgimigoods` VALUES ('38', 'https://file02.xgimi.com/official/admin/20180829/2018082909535149519.jpg', ' 极米100英寸地拉幕布 ', '1199.00', '564', null, '遥控升降/高增益/广视角');
INSERT INTO `xgimigoods` VALUES ('39', 'https://file02.xgimi.com/official/admin/20191121/2019112117045873026.png', ' 极米100英寸16：9遥控电动幕布 ', '599.00', '876', null, '增益效果提升/优质面料/工艺升级/电动静音调控。');
INSERT INTO `xgimigoods` VALUES ('40', 'https://file02.xgimi.com/official/admin/20191121/2019112116593262230.png', ' 极米100英寸16:10电动幕布(P138S) ', '499.00', '1231', null, '增益效果提升/优质面料/工艺升级/电动静音调控。\r\n\r\n增益效果提升/优质面料/工艺升级/电动静音调控。\r\n\r\n增益效果提升/优质面料/工艺升级/电动静音调控。');
INSERT INTO `xgimigoods` VALUES ('41', 'https://file02.xgimi.com/official/admin/20191121/2019112116573676979.png', ' 极米100英寸4:3电动幕布(P139S) ', '399.00', '1231', null, '轻活灵巧，重量仅1.8KG，置于桌面上快速展开，收拢后方便携带，高度、角度随意调节，此幕布与极米任意型号激光电视不搭配。');
INSERT INTO `xgimigoods` VALUES ('42', 'https://file02.xgimi.com/official/admin/20191121/2019112116510936527.png', ' 极米50英寸16:10桌面幕布 ', '299.00', '766', null, '预售，订单3月16日起按照下单顺序发出 多角度自由调节/4+1节支撑杆/巧妙底座设计。不支持H3、RS Pro');
INSERT INTO `xgimigoods` VALUES ('43', 'https://image.xgimi.com/shop/images/201707/source_img/86_G_1500430152800.jpg', ' X-Floor 落地支架（F062S） ', '499.00', '231', null, '视角可调，铝合金材质，工字钢结构形态，工艺精湛。长宽高：213*80*97mm。颜色：黑&金，质量：379g，产品整体重量（含包装）：540g。');
INSERT INTO `xgimigoods` VALUES ('44', 'https://image.xgimi.com/shop/images/201607/source_img/50_G_1468865696256.jpg', ' X-Wall壁挂支架 ', '199.00', '988', null, '2+1模块结构高度自由调节/云台角度正负10°可调适应多种吊装环境');
INSERT INTO `xgimigoods` VALUES ('45', 'https://image.xgimi.com/shop/images/201706/source_img/75_G_1498427262022.jpg', ' 极米X-Roof吊顶支架 ', '199.00', '2123', null, '独立云台/模块化结构，此配件不适用于极米激光电视和儿童机系列。');
INSERT INTO `xgimigoods` VALUES ('46', 'https://file02.xgimi.com/official/admin/20190124/2019012415290135741.jpg', ' 极米吊顶支架（C225B） ', '199.00', '443', null, '独立云台/模块化结构，此配件不适用于极米激光电视和儿童机系列。');
INSERT INTO `xgimigoods` VALUES ('47', 'https://file02.xgimi.com/official/admin/20190124/2019012415291280573.jpg', ' 极米三脚架 ', '149.00', '233', null, '高强度铝合金和进口ABS管径可达20mm，4节伸缩式脚架设计，承载重量1.5Kg内，不适配以下机型：H1/H1S/H2/H3激光电视等系列，购买前请注意机器重量是否满足使用条件。（需搭配专用转接盘使用）');
INSERT INTO `xgimigoods` VALUES ('48', 'https://file02.xgimi.com/official/admin/20190124/2019012415293020961.jpg', ' 极米X-Desktop 桌面支架 ', '98.00', '422', null, '多用途，随心搭配，需搭配转接盘使用。');
INSERT INTO `xgimigoods` VALUES ('49', 'https://file02.xgimi.com/official/admin/20180802/2018080214504016571.jpg', ' 极米激光电视支架硬幕版 ', '2099.00', '1231', 'https://file02.xgimi.com/official/admin/20180802/2018080214510463503.jpg,https://file02.xgimi.com/official/admin/20180802/2018080214510761058.jpg', '极米激光电视+抗光幕布一体解决方案，套餐内包含：极米激光电视工程支架+极米硬幕适配杆，详情见包装清单。温馨提示：不支持DNP幕布使用，下单后预计5-12个工作日内发货。');
INSERT INTO `xgimigoods` VALUES ('50', 'https://file02.xgimi.com/official/admin/20200323/2020032314001011376.jpg', ' 极米3D眼镜夹片款 ', '198.00', '123', 'https://file02.xgimi.com/official/admin/20190313/2019031314070185958.jpg,https://file02.xgimi.com/official/admin/20190313/2019031314065921392.jpg,https://file02.xgimi.com/official/admin/20190313/2019031314070325818.jpg,https://file02.xgimi.com/official/admin/20190313/2019031314070782589.jpg ', '预售，到货后按下单顺序发货，下单前咨询客服。60h长续航/激光电视、长焦机通用/秒变夹片式眼镜 适用近视人群');
INSERT INTO `xgimigoods` VALUES ('51', 'https://file02.xgimi.com/official/admin/20190124/2019012414572781265.png', ' 极米无线游戏手柄 ', '199.00', '8765', 'https://image.xgimi.com/shop/images/201703/source_img/251_G_1489606293058.jpg,https://image.xgimi.com/shop/images/201703/source_img/251_P_1489606406080.jpg,https://image.xgimi.com/shop/images/201703/source_img/251_P_1489606396222.jpg,https://image.xgimi.com/shop/images/201703/source_img/251_P_1489606385089.jpg,https://image.xgimi.com/shop/images/201703/source_img/251_P_1489606370197.jpg', '360°游戏摇杆/微触动灵敏肩键/人体工学设计/智能电量管理。');
INSERT INTO `xgimigoods` VALUES ('52', 'https://file02.xgimi.com/official/admin/20190428/2019042815014489894.jpg', ' 极米无线麦克风S1 ', '349.00', '1232', 'https://file02.xgimi.com/official/admin/20190428/2019042814570420078.jpg,https://file02.xgimi.com/official/admin/20190428/2019042814570664894.jpg,https://file02.xgimi.com/official/admin/20190428/2019042814570895424.jpg', '系统级DSP芯片/无线连接/长续航');
INSERT INTO `xgimigoods` VALUES ('53', 'https://file02.xgimi.com/official/admin/20180530/2018053016572796757.jpg', ' Z4 Air 皮革保护套 ', '199.00', '2342', 'https://file02.xgimi.com/official/admin/20180530/2018053016530181596.jpg,https://file02.xgimi.com/official/admin/20180530/2018053016530486254.jpg,https://file02.xgimi.com/official/admin/20180530/2018053016530647318.jpg,https://file02.xgimi.com/official/admin/20180530/2018053016530915962.jpg', '商务设计/量身定制/防滑耐磨/支架功能');
INSERT INTO `xgimigoods` VALUES ('54', 'https://image.xgimi.com/shop/images/201608/source_img/53_G_1471204755213.jpg', ' H系列便携收纳包 ', '199.00', '543', 'https://image.xgimi.com/shop/images/201608/source_img/211_P_1471199325832.jpg,https://image.xgimi.com/shop/images/201608/source_img/211_P_1471199315134.jpg,https://image.xgimi.com/shop/images/201608/source_img/211_P_1471199300381.jpg,https://image.xgimi.com/shop/images/201608/source_img/211_G_1471199335714.jpg', '简洁百搭，防水高弹PVC面料，高密度防水，多重收纳空间，摆脱杂乱。适配机型见商品详情页');
INSERT INTO `xgimigoods` VALUES ('55', 'https://image.xgimi.com/shop/images/201604/source_img/13_G_1460339558561.jpg', ' Z4Air便携包 ', '129.00', '453', 'https://image.xgimi.com/shop/images/201604/source_img/93_P_1460340050554.jpg,https://image.xgimi.com/shop/images/201511/source_img/93_P_1446504864841.jpg,https://image.xgimi.com/shop/images/201511/source_img/93_P_1446504864985.jpg,https://image.xgimi.com/shop/images/201511/source_img/93_P_1446503453484.jpg,https://image.xgimi.com/shop/images/201510/source_img/93_P_1446171131938.jpg', '适用于Z4Air，贴合机身线条，口袋式设计，结实牢靠。');
INSERT INTO `xgimigoods` VALUES ('56', 'https://image.xgimi.com/shop/images/201604/source_img/14_G_1460339652904.jpg', ' Z4Air/芒果小觅转接盘 ', '99.00', '232', 'https://image.xgimi.com/shop/images/201604/source_img/99_P_1460340038587.jpg,https://image.xgimi.com/shop/images/201511/source_img/99_P_1447614720486.jpg,https://image.xgimi.com/shop/images/201511/source_img/99_P_1447614720947.jpg,https://image.xgimi.com/shop/images/201511/source_img/99_P_1447107860224.jpg,https://image.xgimi.com/shop/images/201604/source_img/99_G_1460340038896.jpg ', 'PC+ABS工程塑料合金材质');
INSERT INTO `xgimigoods` VALUES ('57', 'https://image.xgimi.com/shop/images/201604/source_img/25_G_1460339514344.jpg', ' 极米DC电源延长线 ', '29.00', '7777', 'https://image.xgimi.com/shop/images/201604/source_img/137_P_1460339894332.jpg,https://image.xgimi.com/shop/images/201512/source_img/137_P_1449776740736.jpg,https://image.xgimi.com/shop/images/201512/source_img/137_P_1449774822381.jpg,https://image.xgimi.com/shop/images/201512/source_img/137_P_1449774822854.jpg,https://image.xgimi.com/shop/images/201512/source_img/137_P_1449774822265.jpg,https://image.xgimi.com/shop/images/201604/source_img/137_G_1460339894975.jpg', '可解决无屏电视因移动、摆放、壁挂、吊架时的布线不足问题，配合随机附线使用，可有效延长至1.2M。不支持H3\\RS Pro');
INSERT INTO `xgimigoods` VALUES ('58', 'https://file02.xgimi.com/official/admin/20190428/2019042813530424102.jpg', ' HDMI高清数据线1.8m ', '59.00', '1231', 'https://file02.xgimi.com/official/admin/20190428/2019042814153757033.jpg,https://file02.xgimi.com/official/admin/20190428/2019042814154226458.jpg,', 'HDMI2.0高清数据线');
INSERT INTO `xgimigoods` VALUES ('59', 'https://image.xgimi.com/shop/images/201608/source_img/52_G_1470788819915.jpg', ' Kimi大圣版桌面支架 ', '49.00', '232', 'https://image.xgimi.com/shop/images/201608/source_img/209_P_1470699027595.jpg,https://image.xgimi.com/shop/images/201608/source_img/209_P_1470699036386.jpg,https://image.xgimi.com/shop/images/201608/source_img/209_P_1470699013645.jpg,https://image.xgimi.com/shop/images/201608/source_img/209_G_1470699707329.jpg', 'Z4爵色/Z4air/芒果小觅专用。');
INSERT INTO `xgimigoods` VALUES ('60', 'https://image.xgimi.com/shop/images/201606/source_img/46_G_1464915698546.jpg', ' 极米桌垫石 ', '19.00', '231', 'https://image.xgimi.com/shop/images/201606/source_img/164_P_1464916316785.jpg,https://image.xgimi.com/shop/images/201606/source_img/164_P_1464916335623.jpg,https://image.xgimi.com/shop/images/201606/source_img/164_P_1464916295171.jpg,https://image.xgimi.com/shop/images/201606/source_img/164_P_1464916278801.jpg', '内置永磁体，轻松与无屏电视融为一体。可调视角，胶垫保护，便于携带。');
INSERT INTO `xgimigoods` VALUES ('61', 'https://file02.xgimi.com/official/admin/20180604/2018060416055070019.jpg', ' 售后配件 ', '99.00', '9999', 'https://image.xgimi.com/shop/images/201705/source_img/265_P_1494023986342.jpg,https://image.xgimi.com/shop/images/201705/source_img/265_P_1494024005180.jpg,https://image.xgimi.com/shop/images/201705/source_img/265_P_1494024013359.jpg,https://image.xgimi.com/shop/images/201705/source_img/265_P_1494024021529.jpg', '【预售】 < 温馨提示：售后配件无精品包装，不支持7天无理由退货，不支持批量购买。满59包邮，下单后预计10个工作日内发货，请勿催单 > 适配所有机型（除Z3系列机器外）');
INSERT INTO `xgimigoods` VALUES ('62', 'https://file02.xgimi.com/official/admin/20200320/2020032010350529264.jpg', ' 主动快门式3D眼镜 ', '198.00', '231', 'https://file02.xgimi.com/official/admin/20200320/2020032011160869243.jpg,src=\"https://file02.xgimi.com/official/admin/20200320/2020032011161430866.jpg,https://file02.xgimi.com/official/admin/20200320/2020032011162132526.jpg,https://file02.xgimi.com/official/admin/20200320/2020032011162888738.jpg', '请勿下单购买，此款眼镜活动晒单赠送款，仅作展示。');
