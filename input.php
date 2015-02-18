<?php
	error_reporting(0);
	include('loader.php');
	
	$newTask=$_POST['serialize'];
	$name=$data['$newTask'];  //access data like this
	

	echo ($newTask);
	$insertion = "INSERT INTO todolist
	VALUES('$newTask')";
	echo ($insertion);
	mysql_query($insertion);

?>