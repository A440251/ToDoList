<?php
	//error_reporting(0);
	include('loader.php');
	
	$newTask=$_POST['thingstodo'];

	echo ($newTask);
	$insertion = "INSERT INTO thingstodo
	VALUES('$newTask');";
	echo ($insertion);
	$thequery = mysql_query($insertion);
	echo ($thequery)
?>