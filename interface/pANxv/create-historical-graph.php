<?php

function generateRandomData() {
    echo "[\n";
    for ($i = 2000; $i < 2041; $i++) {
        echo "{\n";
        echo "                \"period\" : \"" . $i . "\",\n";
        echo "                \"targets\" : \"" . rand(0,100) . "\",\n";
        echo "                \"files\" : \"" . rand(0,100) . "\",\n";
        echo "                \"usage\" : \"" . rand(0,100) . "\",\n";
        echo "                \"duration\" : \"" . rand(0,100) . "\"\n";
	if ($i != 2040) {
		echo "            },\n";
	} else {
		echo "            }]\n";
	}
    }
}

//echo "$(document).ready(function() {\n\n    Morris.Area({\n        element: 'morris-extra-area',\n        data: [\n";
echo generateRandomData();
//echo "\n        ],\n        lineColors: ['#fb9678', '#7E81CB', '#01C0C8', '#c57ecb'],\n        xkey: 'period',\n        ykeys: ['targets', 'files', 'usage', 'duration'],\n        labels: ['Targets', 'Files', 'Usage', 'Duration'],\n        pointSize: 2,\n        lineWidth: 2.5,resize: true,\n        fillOpacity: 0.5,\n        behaveLikeLine: true,\n        gridLineColor: '#5FBEAA',\n        hideHover: 'auto'\n    });\n});\n";

?>
