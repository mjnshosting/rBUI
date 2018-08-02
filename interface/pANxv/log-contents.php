<?php
$logid = $_POST['logid'];

function getLogContents ($logid) {
	if ($logid == 1) {
		echo "<p> TEST 1</p>";
	}
	if ($logid == 2) {
		echo "<p> TEST 2</p>";
	}
	if ($logid == 3) {
		echo "<p> TEST 3</p>";
	}
}

getLogContents ($logid);
?>
