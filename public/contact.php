<?php
$myEmail = 'k.s.konovalov@gmail.com';
$title = 'Contact from kskonovalov.me';
$body = '';
$message = '';
$error = true;

if(isset($_POST['json'])) {
    $json = $_POST['json'];
    $json = json_decode($json, true);
    if(isset($json["email"])) {
        $name = $json["name"];
        $email = $json["email"];
        $message = $json["message"];
        $body .= <<<EOD
<b>Name:</b> {$name}<br>\r\n
<b>E-mail:</b> {$email}<br>\r\n
<b>Message:</b> {$message}
EOD;
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

        if (mail($myEmail, $title, $body, $headers)){
            $message = "Email has been sent, thank you!";
            $error = false;
        } else {
            $message = "Oops, seems like something went wrong. Please, mail me directly to {$myEmail}";
        }
    }
} else {
    $message = "Oops, seems like something went wrong. Please, mail me directly to {$myEmail}";
}

echo json_encode([
    "error" => $error,
    "message" => $message
]);