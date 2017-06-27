<?php


function findEvenInts($integer) {
    return $integer % 2 === 0;
}
array_shift($argv);

print_r(array_filter($argv, "findEvenInts"));

?>
