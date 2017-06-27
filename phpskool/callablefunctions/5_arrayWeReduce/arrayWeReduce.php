<?php

array_shift($argv);

function func($output, $integer) {
        return $output + $integer;
};

print_r(array_reduce($argv, "func"));

//$multiplySum = function($integer, $output) {
//    return $output * $integer;
//};

//print_r(array_reduce($arrayOfInts, $multiplySum));

?>
