<?php
 
$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_database = 'testdb1';
 
 
$dblinkPub = mysql_connect($db_host, $db_user, $db_pass );
mysql_select_db($db_database) or die("Unable .. to select database - $db_database");
 
?>