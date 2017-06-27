<?php

date_default_timezone_set("Europe/London");
error_reporting(E_ALL);
ini_set("display_errors", 1);
array_shift($argv);
print_r(array_reduce($argv, function ($output, $i) {
    return $output += $i;
}));
