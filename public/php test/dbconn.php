<?php
	
	$dbconn = msqli_connect("localhost", "root", "username", "password");



	$query = "SELECT * FROM Events";
	$result = mysqli_query($dbconn, $query);

	$data = array();

	while($tuple = mysqli_query($result)) {
		array_push($data, $tuple);
	}
	mysqli_free_result($result);

	echo $data;
 
    mysqli_close($dbconn);
    echo json_encode($data);
?>
