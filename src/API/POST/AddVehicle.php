<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers:*");
 header("Access-Control-Allow-Methods: *");
 header("Content-type: text/json");
 header("Content-type: application/json; charset=utf-8");

 include 'connection.php';

$sQuery= "INSERT INTO vehiclestable (Id, VehicleMake, VehicleModel) VALUES (:Id, :Make, :Model)";

 $oData=array
 (
	
     'Id' => $_POST['marka_vozila'],
     'Make' => $_POST['model_vozila'],
     'Model' => $_POST['vrsta_vozila'],

 );
try
		{
            $oStatement=$conn->prepare($sQuery);
			$oStatement->execute($oData);

			echo 1;
			
		} catch (PDOException $error) 
		{
			echo ($error->getMessage());
			echo 0;
		}

?>