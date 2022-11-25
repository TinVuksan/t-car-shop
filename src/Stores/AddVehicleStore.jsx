import {makeObservable, toJS, action} from 'mobx';
import Axios from 'axios'
class AddStore {

    constructor() {
        makeObservable(this, {
            addVehicle:action,  
        });
    }

    addVehicle(formData) {
       // var params = new URLSearchParams();
        const vehicleData = formData;
        console.log(vehicleData);
        // params.append('VehicleInfo', formData.Info);
        // params.append('VehicleMake', formData.Make);
        // params.append('VehicleImage', formData.Image);
        // params.append('VehicleModel', formData.Model);
        // params.append('VehiclePower', formData.Power);
        // params.append('VehicleRegDate', formData.RegDate);
        // params.append('VehicleRegExpDate', formData.RegExpDate);
            Axios.post("https://api.baasic.com/beta/t-car-shop/resources/Vehicles/", vehicleData)
            .then(() => {
                console.log(vehicleData);
              
            })

            .catch((error) => {
                console.log(error)
            })
    }
}

const addStore = new AddStore();

export default addStore;