<?php

$greetUsers = function ($user) {
    echo "Hello " . $user . "\n";
};

array_shift($argv); //REMOVE FIRST ARGUMENT ie SCRIPT ADDY
array_walk($argv,$greetUsers);

?>
