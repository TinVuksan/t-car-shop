<?php
ini_set('memory_limit', '2048M');
header('Content-type: text/json');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin:*');
include "connection.php";


$oVehicles=array();

    $sQuery="SELECT * FROM vehiclestable";
		$oRecord=$conn->query($sQuery);
		//var_dump($oRecord->fetch(PDO::FETCH_BOTH));
		while($oRow=$oRecord->fetch(PDO::FETCH_ASSOC))
		{
		
			$oVehicle=new Vehicle(
					$oRow['Id'],
					$oRow['VehicleMake'],
					$oRow['VehicleModel'],
				);

			array_push($oVehicles, $oVehicle);
		}
		
	echo json_encode($oVehicles);
	
?>