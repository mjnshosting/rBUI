<?php

function generateRandomString($length = 5) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

//Make a randomly named PHP scripts directorye
$random_dir = generateRandomString();
mkdir("../interface/" . $random_dir, 0755);

//This is operational but will be uncommented later
//rename("scripts" , "../interface/" . $random_dir);
?>
