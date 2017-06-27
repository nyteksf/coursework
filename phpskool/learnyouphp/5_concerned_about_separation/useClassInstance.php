<?php

$filePath = $argv[1];
$fileType = $argv[2];

require_once(__DIR__ . '/my_module.php');
$dirFilter = new DirectoryFilter;

array_map(function ($fileName) {
    echo $fileName . "\n";
}, $dirFilter->getFiles($filePath, $fileType));

/**OR USE:
array_map(function ($fileName) {
    echo $fileName . "\n";
}, (new DirectoryFilter)->getFiles($filePath, $fileType));
**/
?>
