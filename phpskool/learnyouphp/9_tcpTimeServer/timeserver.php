<?php

date_default_timezone_set("Europe/London");

error_reporting(E_ALL);
ini_set("display_errors", 1);

set_time_limit(0);

ob_implicit_flush();

$address = $argv[1];
$port = $argv[2];

$time_server = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

socket_bind($time_server, $address, $port);

socket_listen($time_server);

$client = socket_accept($time_server);

$d = new DateTime('NOW');
$display_time = $d->format('Y-m-d H:i:s' . "\n");
socket_write($client, $display_time, strlen($display_time));
socket_close($time_server);


?>
