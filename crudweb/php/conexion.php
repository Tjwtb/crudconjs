<?php
$servername = 'LAPTOP-LGNBGB69';
$databasename = 'Empleados';
$connectionInfo = array('Database' => $databasename);
$conn = sqlsrv_connection($servername, $connectionInfo);