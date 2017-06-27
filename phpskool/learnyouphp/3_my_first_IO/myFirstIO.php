<?php

$fileData = file_get_contents($argv[1]);

print_r(substr_count($fileData,"\n"));

?>
