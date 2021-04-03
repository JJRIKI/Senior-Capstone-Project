<?php
	require "database.php";

	$json = array();
	$query = "SELECT * FROM Events ORDER BY id";
	$result = mysqli_query($conn, $query);
	$data = [];
	foreach($result as $row) 
    {
        $data[] = [
			'id'              => $row->id,
			'title'           => $row->title,
			'start'           => $row->start,
			'end'             => $row->end
		];
    }
	mysqli_free_result($result);
	mysqli_close($conn);
	echo json_encode($data);
?>