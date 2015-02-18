<?php
error_reporting(0);
include('loader.php');

$result = mysql_query("select * from thingstodo");
//instantiate an empty array
$output = array();

//fill this array with values that I need
while ($row = mysql_fetch_object($result)) {
	$output[] = $row;
}
mysql_free_result($result);
//print is actually a return when you think about how the
//json interacts with it
print(json_encode($output));

?>