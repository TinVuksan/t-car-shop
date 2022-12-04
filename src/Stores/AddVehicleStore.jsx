import {makeObservable, toJS, action, autorun} from 'mobx';
import getStore from './GetVehicleStore';
import Axios from 'axios'

class AddStore {

    constructor() {
        makeObservable(this, {
            addVehicle:action,  
        });
    }

    addVehicle(formData) {
        
        const vehicleData = formData;
            Axios.post("https://api.baasic.com/beta/t-car-shop/resources/Vehicles/", vehicleData)
            .then(() => {
                
            })

            .catch((error) => {
                console.log(error)
            })
    }
}

const addStore = new AddStore();
autorun(() => {
    getStore.getData();
})
export default addStore;