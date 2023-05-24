<?php
if(isset( $_POST)){
include_once 'conexion.php';
include_once 'validar_correo.php';
$nombre = $_POST["name"] ;
$apellido = $_POST["apellido"] ;
$usuario = $_POST["usuario"] ;
$fecha = $_POST["fecha"] ;
$telefono = $_POST["telefono"]  ;
$correo2 = $_POST["correo2"] ;
$password2 = $_POST["password2"] ; 
$error=0;

if(is_numeric($nombre)|| preg_match("/[0-9 ''()]/",$nombre)){
    echo "Nombre no puede contener numeros ni caracteres";
    $error++; 
   }

if(is_numeric($apellido)|| preg_match("/[0-9 ''()]/",$apellido)){
    echo "apellidos no puede contener numeros ni caracteres";
    $error++; 
   }

   $verificar=ConsultarEmail($conexion,$correo2);
   if($verificar){
    echo 'correo ya existe';
    $error++; 
   }else{

   }

   if($error==0){
$sql = "INSERT INTO registros (nombre, apellido, usuario, fecha, telefono, usu_correo, password2) VALUES ('$nombre', '$apellido', '$usuario', '$fecha', '$telefono','$correo2','$password2')";

if (mysqli_query($conexion, $sql)){
    echo 'Registro exitoso';
}

else{
    echo 'No se puede registrar'; 
}


}
}

