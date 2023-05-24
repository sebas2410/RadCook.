<?php
function ConsultarEmail($conexion,$correo2){

    $sql="SELECT * FROM  registros WHERE usu_correo='$correo2'";
    if($verifi=mysqli_query($conexion,$sql)){
        $existe=mysqli_fetch_assoc($verifi);
        return $existe;
    }
    
}