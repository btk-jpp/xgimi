<?php
include "conn.php";

if (isset($_POST['username']) && isset($_POST['password'])) {
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $result = $conn->query("select * from registry where username='$user' and password='$pass'");
    if ($result->fetch_assoc()) { //匹配成功
        echo true;
    } else { //匹配不成功
        echo false;
    }
}
