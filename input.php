<?php
	error_reporting(0);
	include('loader.php');
	
	$newTask=$_POST['serialize'];
	$name=$newTask['mainbutton'];  //access data like this
	

	echo ($newTask);
	echo ("$name");
	$insertion = "INSERT INTO thingtodo
	VALUES('$newTask')";
	echo ($insertion);
	mysql_query($insertion);

?>