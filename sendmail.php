<?php
header('Content-type: application/json');

$replyto = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['msg'];

$body = "<h1>Nouveau message YogaEnPevele.fr</h1><ul><li>Email : <strong>".$replyto."</strong></li><li>Name : <strong>".$name."</strong></li></ul>";
$body .= "<p>".$message."</p>";

$headers ='From: postmaster@yogaenpevele.fr'."\n";
$headers .='Reply-To: '.$replyto."\n";
$headers .='Content-Type: text/html; charset=utf-8'."\n";
$headers .='Content-Transfer-Encoding: 8bit';
$success = mail('yogaenpevele@gmail.com', 'Message de YogaEnPevele.fr', $body, $headers);

$ok = array ('status'=>'OK');
$ko = array ('status'=>'KO');

if ($success) {
    echo json_encode($ok);
} else {
    echo json_encode($ko);
}
