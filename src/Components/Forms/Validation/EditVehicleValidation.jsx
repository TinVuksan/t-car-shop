import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validator from 'validatorjs'
import editStore from "../../../Stores/EditVehicleStore";
const plugins = {
  dvr: dvr(validator)
};

const fields = [
  {
    name: "id",
    label: "ID",
    placeholder: "Vehicle ID",
    //value:`${editStore.vehicle.id || ''}` 
  },
  {
    name: "VehicleMake",
    label: "Make",
    placeholder: "Insert model",
    rules: "required|string",
    //value:`${editStore.vehicle.VehicleMake || ''}`
  },
  {
    name: "VehicleModel",
    label: "Model",
    placeholder: "Insert model",
    rules: "required|string",
    //value:`${editStore.vehicle.VehicleModel || ''}`
  },
  {
    name: "VehiclePower",
    label: "Power",
    placeholder: "Insert power",
    rules: "required|integer",
    //value:`${editStore.vehicle.VehiclePower || ''}`

  },
  {
    name: "VehicleRegDate",
    label: "RegDate",
    placeholder: "Insert registration date",
    rules:"required",
    //value:`${editStore.vehicle.VehicleRegDate || ''}`

  },
  {
    name: "VehicleRegExpDate",
    label: "RegExpDate",
    placeholder: "Insert reg expiration date",
    rules: "required|after:VehicleRegDate",
    //value:`${editStore.vehicle.VehicleRegExpDate || ''}`
  },
  {
    name: "VehicleInfo",
    label: "Info",
    placeholder: "Insert vehicle info",
    rules: "required|string",
    //value:`${editStore.vehicle.VehicleInfo || ''}`//Tes
  },
  {
    name: "VehicleImage",
    label: "Image URL",
    placeholder: "Insert vehicle image",
    rules: "required|url",
    //value:`${editStore.vehicle.VehicleImage || ''}`
    
  }
];

const hooks = {
  onSuccess(form) {
    editStore.editVehicle(form.values());
    alert('Vehicle successfully edited!')
  },
  onError(form) {
    alert("Form has errors!");
    console.log(form.errors())
  },
};

export default new MobxReactForm({ fields }, { plugins, hooks });
