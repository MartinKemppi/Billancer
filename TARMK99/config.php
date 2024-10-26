<?php
$servername = "localhost";
$username = "tarpv22";
$password = "123456";
$dbname = "tarpv22";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
