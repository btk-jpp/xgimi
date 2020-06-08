<?php
include "conn.php";
$sql = "select * from indexgoods limit 0,6"; //激光电视数据
$result = $conn->query($sql); //获取数据的结果集(记录集)
$arr = array();
for ($i = 0; $i < $result->num_rows; $i++) {
    $arr[$i] = $result->fetch_assoc();
};
$sql2 = "select * from indexgoods limit 7,6"; //获取家用电视数据
$result2 = $conn->query($sql2); //获取数据的结果集(记录集)
$arr2 = array();
for ($i = 0; $i < $result2->num_rows; $i++) {
    $arr2[$i] = $result2->fetch_assoc();
};
class data{};
$indexdata = new data();
$indexdata->data1 = $arr;
$indexdata->data2 = $arr2;
echo json_encode($indexdata);//输出接口
