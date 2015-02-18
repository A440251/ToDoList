<?php
	error_reporting(0);
	include('loader.php');
	
	$newTask=$_POST['task'];

	//$name=$newTask['mainbutton'];  //access data like this
	

	echo ($newTask);
	echo ("$name");
	$insertion = "INSERT INTO thingstodo
	VALUES('$newTask');";
	echo ($insertion);
	$thequery = mysql_query($insertion);
	echo ($thequery)
?>