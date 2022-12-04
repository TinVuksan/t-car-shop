import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validator from 'validatorjs'
import addStore from "../../Stores/AddVehicleStore";
const plugins = {
  dvr: dvr(validator)
};

const fields = [
  {
    name: "VehicleMake",
    label: "Make",
    placeholder: "Insert model",
    rules: "required|string",

  },
  {
    name: "VehicleModel",
    label: "Model",
    placeholder: "Insert model",
    rules: "required|string",

  },
  {
    name: "VehiclePower",
    label: "Power",
    placeholder: "Insert power",
    rules: "required|integer",


  },
  {
    name: "VehicleRegDate",
    label: "RegDate",
    placeholder: "Insert registration date",
    rules: "required",

  },
  {
    name: "VehicleRegExpDate",
    label: "RegExpDate",
    placeholder: "Insert reg expiration date",
    rules: "required|after:VehicleRegDate",

  },
  {
    name: "VehicleInfo",
    label: "Info",
    placeholder: "Insert vehicle info",
    rules: "required|string"
  },
  {
    name: "VehicleImage",
    label: "Image URL",
    placeholder: "Insert vehicle image",
    rules: "required|url",
    
  }
];

const hooks = {
  onSuccess(form) {
    addStore.addVehicle(form.values());

  },
  onError(form) {
    alert("Form has errors!");
    console.log("All form errors", form.errors());

  },
};

export default new MobxReactForm({ fields }, { plugins, hooks });
