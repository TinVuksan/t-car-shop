<?php

class Configuration
{
	public $host="localhost";
	public $dbName="t-car-shop";
	public $username="root";
	public $password="";	
}

class Vehicle
{
	public $Id="N/A";
	public $VehicleMake="N/A";
	public $VehicleModel="N/A";
	public function __construct($Id=NULL,$VehicleMake=NULL,$VehicleModel=NULL)
	{
		if($Id) $this->Id =$Id;
		if($VehicleMake) $this->VehicleMake =$VehicleMake;
		if($VehicleModel) $this->VehicleModel =$VehicleModel;
	}
}



?>