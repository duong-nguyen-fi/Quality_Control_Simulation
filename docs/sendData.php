<?php

 	$offset = $_POST["offset"];
 	$id 	= $_POST["id"];
 	//$PLAYER_id = $_POST["id"];
 	$date = date("Y-m-d H:i:s",time());
 	$date = "\"".$date."\"";   
 	//put double quote to both end of datetime value

 	$servername = "mysql.cc.puv.fi";
	$username = "e1500948";
	$password = "RXXT5tPH4YbW";
	$dbname = "e1500948_SixSigma";
  	$sql = mysql_connect($servername,$username,$password);

  	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 

  	$sql = "INSERT INTO PUNCH (time, x, offset, qualification, comment, PLAYER_id) values($date, 0.5, $offset, 1, 1, $id)";
  	
  	// echo error is query cannot be done
	if ($conn->query($sql)) {
    //echo "New record created successfully";
		
		echo "Record num: " .  mysqli_insert_id($conn);
	} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    echo 'alert("Something went wrong")';
	}
	
//close connection
$conn->close();
 ?>