<?php
$range = $_POST['range'];

function generateRandomDataRange($range) {
    echo "[\n";
    for ($i = 2000; $i < $range; $i++) {
        echo "{\n";
        echo "                \"period\" : \"" . $i . "\",\n";
        echo "                \"targets\" : \"" . rand(0,100) . "\",\n";
        echo "                \"files\" : \"" . rand(0,100) . "\",\n";
        echo "                \"usage\" : \"" . rand(0,100) . "\",\n";
        echo "                \"duration\" : \"" . rand(0,100) . "\"\n";
        if ($i != ($range - 1)) {
                echo "            },\n";
        } else {
                echo "            }]\n";
        }
    }
}

function generateRandomData() {
	$range = "2040";
	    echo "[\n";
	    for ($i = 2000; $i < $range; $i++) {
	        echo "{\n";
	        echo "                \"period\" : \"" . $i . "\",\n";
	        echo "                \"targets\" : \"" . rand(0,100) . "\",\n";
	        echo "                \"files\" : \"" . rand(0,100) . "\",\n";
	        echo "                \"usage\" : \"" . rand(0,100) . "\",\n";
	        echo "                \"duration\" : \"" . rand(0,100) . "\"\n";
		if ($i != ($range - 1) ) {
			echo "            },\n";
		} else {
			echo "            }]\n";
		}
	    }
	}

if (isset($range)) {
        generateRandomDataRange($range);
} else {
	generateRandomData();
}
?>
