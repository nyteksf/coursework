<?php
$filePaths = $argv;
array_shift($filePaths);

foreach ($filePaths as $filePath) {
    try {
        $file = new SplFileObject($filePath);
        echo $file->getBasename() . "\n";
    } catch (RuntimeException $e) {
        echo "Unable to open file at path '" . $filePath . "'\n";
    }
}
