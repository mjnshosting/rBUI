<?php
$type = $_POST['type'];

function getDeviceList ($type) {
switch ($type) {
	case 0:
		echo "<li>";
		echo "<div class='card user-card'>";
		echo "<div class='card-block'>";
		echo "<div class='media'>";
		echo "<img class='media-object img-circle card-list-img' src='assets/images/win-logo.png' alt='Server Name Here'>";
		echo "&nbsp;&nbsp;&nbsp;";
		echo "<div class='media-body'>";
		echo "<div class='col-xs-12'>";
		echo "<h6 class='d-inline-block'>DC01</h6>";
		echo "<br>";
		echo "<label class='label label-info'>Windows Server</label>";
		echo "</div>";
		echo "<div class='m-t-15'>";
		echo "<i class='icofont icofont-file-alt text-files'></i> Total File Count: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-pie-chart text-usage'></i> Total Storage Used: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-clock-time text-duration'></i> Last Backup Duration: " . rand(0,100000) . "<br>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</li>";
		break;
	case 1:
		echo "<li>";
		echo "<div class='card user-card'>";
		echo "<div class='card-block'>";
		echo "<div class='media'>";
		echo "<img class='media-object img-circle card-list-img' src='assets/images/lin-logo.png' alt='Server Name Here'>";
		echo "&nbsp;&nbsp;&nbsp;";
		echo "<div class='media-body'>";
		echo "<div class='col-xs-12'>";
		echo "<h6 class='d-inline-block'>VM0</h6>";
		echo "<br>";
		echo "<label class='label label-warning'>Linux Server</label>";
		echo "</div>";
		echo "<div class='m-t-15'>";
		echo "<i class='icofont icofont-file-alt text-files'></i> Total File Count: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-pie-chart text-usage'></i> Total Storage Used: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-clock-time text-duration'></i> Last Backup Duration: " . rand(0,100000) . "<br>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</li>";
		break;
	case 2:
		echo "<li>";
		echo "<div class='card user-card'>";
		echo "<div class='card-block'>";
		echo "<div class='media'>";
		echo "<img class='media-object img-circle card-list-img' src='assets/images/net-logo.png' alt='Server Name Here'>";
		echo "&nbsp;&nbsp;&nbsp;";
		echo "<div class='media-body'>";
		echo "<div class='col-xs-12'>";
		echo "<h6 class='d-inline-block'>SW0</h6>";
		echo "<br>";
		echo "<label class='label label-success'>Network Device</label>";
		echo "</div>";
		echo "<div class='m-t-15'>";
		echo "<i class='icofont icofont-file-alt text-files'></i> Total File Count: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-pie-chart text-usage'></i> Total Storage Used: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-clock-time text-duration'></i> Last Backup Duration: " . rand(0,100000) . "<br>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</li>";
		break;
	case 3:
		echo "<li>";
		echo "<div class='card user-card'>";
		echo "<div class='card-block'>";
		echo "<div class='media'>";
		echo "<img class='media-object img-circle card-list-img' src='assets/images/win-logo.png' alt='Server Name Here'>";
		echo "&nbsp;&nbsp;&nbsp;";
		echo "<div class='media-body'>";
		echo "<div class='col-xs-12'>";
		echo "<h6 class='d-inline-block'>DC01</h6>";
		echo "<br>";
		echo "<label class='label label-info'>Windows Server</label>";
		echo "</div>";
		echo "<div class='m-t-15'>";
		echo "<i class='icofont icofont-file-alt text-files'></i> Total File Count: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-pie-chart text-usage'></i> Total Storage Used: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-clock-time text-duration'></i> Last Backup Duration: " . rand(0,100000) . "<br>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</li>";
		echo "<li>";
		echo "<div class='card user-card'>";
		echo "<div class='card-block'>";
		echo "<div class='media'>";
		echo "<img class='media-object img-circle card-list-img' src='assets/images/lin-logo.png' alt='Server Name Here'>";
		echo "&nbsp;&nbsp;&nbsp;";
		echo "<div class='media-body'>";
		echo "<div class='col-xs-12'>";
		echo "<h6 class='d-inline-block'>VM0</h6>";
		echo "<br>";
		echo "<label class='label label-warning'>Linux Server</label>";
		echo "</div>";
		echo "<div class='m-t-15'>";
		echo "<i class='icofont icofont-file-alt text-files'></i> Total File Count: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-pie-chart text-usage'></i> Total Storage Used: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-clock-time text-duration'></i> Last Backup Duration: " . rand(0,100000) . "<br>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</li>";
		echo "<li>";
		echo "<div class='card user-card'>";
		echo "<div class='card-block'>";
		echo "<div class='media'>";
		echo "<img class='media-object img-circle card-list-img' src='assets/images/net-logo.png' alt='Server Name Here'>";
		echo "&nbsp;&nbsp;&nbsp;";
		echo "<div class='media-body'>";
		echo "<div class='col-xs-12'>";
		echo "<h6 class='d-inline-block'>SW0</h6>";
		echo "<br>";
		echo "<label class='label label-success'>Network Device</label>";
		echo "</div>";
		echo "<div class='m-t-15'>";
		echo "<i class='icofont icofont-file-alt text-files'></i> Total File Count: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-pie-chart text-usage'></i> Total Storage Used: " . rand(0,100000) . "<br>";
		echo "<i class='icofont icofont-clock-time text-duration'></i> Last Backup Duration: " . rand(0,100000) . "<br>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "</li>";
	}
}

if (isset($type)) {
        getDeviceList($type);
} else {
        getDeviceList(3);
}


?>
