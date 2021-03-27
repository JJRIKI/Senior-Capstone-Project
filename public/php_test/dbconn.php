<?php


	function debug_to_console($data) {
		$output = $data;
		if (is_array($output))
			$output = implode(',', $output);
	
		echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
	}
	// debug_to_console("Test");

	// $dbconn = msqli_connect("localhost", "root", "username", "password");

	// // Check connection
	// if ($dbconn->connect_error) {
	// 	die("Connection failed: " . $dbconn->connect_error);
  	// }


	// echo "debug";
	// while($tuple = mysqli_query($result)) {
	// 	array_push($data, $tuple);
	// }
	// debug_to_console($data);

	
	

?>
