<?php
$servername = "localhost";
$username = "root";
$password = "root";

$conn = mysqli_connect($servername,$username, $password) ;
 
if (!$conn)
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
?>