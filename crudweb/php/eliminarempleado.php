<?php
include_once 'conexion.php';
$Correo = $_POST['correo'];

$sql = "delete from Personas where Correo = '$Correo'";

$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
	die( print_r( sqlsrv_errors(), true) );
}

$datos = [];

while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
     array_push($datos,$row);
}

echo json_encode($datos);