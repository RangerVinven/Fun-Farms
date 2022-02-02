<?php

if(isset($_POST["submit"])) {
    $personName = $_POST["name"];
    $personEmail = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $sendToEmail = "danielmcpherson1195@gmail.com";
    $headers = "Allow: POST";

    mail($sendToEmail, $subject, $message, $headers);
}
?>