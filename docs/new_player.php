<?php

 	$name = $_POST["name"];
 	$name = "\"".$name."\""; 

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

  	$sql = "INSERT INTO PLAYER (name) values($name)";
  	
  	// echo error is query cannot be done
	if ($conn->query($sql)) {
    //echo "New record created successfully";
		
		echo mysqli_insert_id($conn);
	} else {
    //echo "Error: " . $sql . "<br>" . $conn->error;
    echo 'alert("Something went wrong")';
	}
	
//close connection
$conn->close();
 ?>