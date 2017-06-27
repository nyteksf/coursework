<?php

$addDashes = function($argument) {
    return "-" . $argument . "-";
};

array_shift($argv);
print_r(array_map($addDashes,$argv));

?>
