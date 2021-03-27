<?php
	require "./database.php";

	$json = array();
	$query = "SELECT * FROM Events";
	$result = mysqli_query($dbconn, $query);
	$data = array();
	while ($row = mysqli_fetch_assoc($result)) 
    {
        array_push(data, $row);
    }
	mysqli_free_result($result);
	mysqli_close($dbconn);
	echo json_encode($data);
?>