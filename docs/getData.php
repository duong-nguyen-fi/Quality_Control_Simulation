<?php
  $id = $_POST["id"];

  $servername = "mysql.cc.puv.fi";
  $username = "e1500948";
  $password = "RXXT5tPH4YbW";
  $dbname = "e1500948_SixSigma";
  $sql = mysql_connect($servername,$username,$password);

  if(!$sql)
  {
      echo "Connection Not Created";
  }
  $con = mysql_select_db($dbname);
  if(!$con)
  {
      echo "Database Not Connected";
  }
  $data = array();
  //$data[] = array('Lot number','Lower Limit','Upper Limit','offset');
  //$fetch = "SELECT `offset` FROM `PUNCH` WHERE (`id`=(SELECT MAX(`id`) FROM `PUNCH`))";
  //$fetch = "SELECT `offset` FROM `PUNCH` WHERE `id` == MAX(`id`)";
  //$fetch = "SELECT * FROM `PUNCH` WHERE (`id`=(SELECT MAX(`id`) FROM `PUNCH`))";
  $fetch = "SELECT `offset` FROM `PUNCH` WHERE `PLAYER_id` = ($id)";
  $query = mysql_query($fetch);
  if (!$query)
  {
    echo "Cannot query";
  }
  $count =1;
  //$data = array();
  while($result = mysql_fetch_array($query))
  {

  $data[] = array((string)($count),15,30,(double)($result['offset']));
  $count++;
  }
        
  
  echo json_encode($data);
  //setTimeout(delay(),500);

?>