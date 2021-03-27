<?php
$servername = "localhost";
$username = "username";
$password = "password";

$conn = mysqli_connect($servername,$username, $password) ;
 
if (!$conn)
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
 
?>