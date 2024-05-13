<?php

$destinatario = 'oswaldo.herrera.mx@gmail.com';
$nombre = $_POST['nombre'];
$numero = $_POST['numero'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$header = "Enviado desde la pagina de webacademyhnd: " ."Numero Telefónico: " . $numero .", Nombre: " . $nombre . ", email: ". $email;
$asunto = $mensaje . "\nAtentamente: " . $nombre;

mail($destinatario, $asunto, $mensaje, $header);
echo "<script>alert('Correo enviado exitosamente, gracias nos comunicaremos en un momento')</script>";
echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>