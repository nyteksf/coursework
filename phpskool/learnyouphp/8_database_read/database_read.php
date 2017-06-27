<?php

$DSN = $argv[1];
$oldUser = $argv[2];
$newUser = "David Attenborough";

$pdo = new PDO($DSN);

foreach ($pdo->query('SELECT name, age, gender FROM users WHERE age > 30') as $row) {
    print_r("User: " . $row['name'] . " ");
    print_r("Age: " . $row['age'] . " ");
    print_r("Sex: " . $row['gender'] . "\n");
}
// GET RANDOM UN & UPDATE SAME COR. UN'S ROW IN USERS TABLE
// Update 'user' to 'David Attenborough'

$sql = "UPDATE users SET name = ? WHERE name = ?";
$pdo->prepare($sql)->execute([$newUser,$oldUser]);
?>
