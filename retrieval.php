<?php
error_reporting(0);
include('loader.php');


//$result = mysql_query("select * from myTasks");
$result = mysql_query("select * from myTasks");

$output = array();
while ($row = mysql_fetch_object($result)) {
	$output[] = $row;
}
mysql_free_result($result);
//print is actually a return....
print(json_encode($output));

?>