<?php

array_shift($argv); // CLEAR OFF THE FIRST ARGUMENT

$verifiedFilenameArray = array_filter($argv, function ($filePath) {
    return file_exists($filePath);
});

array_map(function ($file) {
    $info = new splFileInfo($file);
    echo $info->getBasename() . "\n";
}, $verifiedFilenameArray);
?>
