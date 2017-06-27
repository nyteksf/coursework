<?php

$userName = $argv[1];

$greetUser = function() use ($userName) {
    echo "Hello " . $userName;
};

$greetUser();

?>
