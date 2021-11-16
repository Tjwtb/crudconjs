<?php
include_once 'conexion.php';
$Nombre = $_POST['nombre'];
$Apellido = $_POST['apellido'];
$Correo = $_POST['correo'];
$Salario = $_POST['salario'];

$sql = "insert into Personas (Nombre, Apellido, Correo, Salario) values ('$Nombre','$Apellido','$Correo','$Salario')";

$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
	die( print_r( sqlsrv_errors(), true) );
}

$datos = [];

while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
     array_push($datos,$row);
}

echo json_encode($datos);