import {makeObservable, action, autorun} from 'mobx';
import { VehicleAPI } from '../Common/API/VehicleAPI';
import getStore from './GetVehicleStore';

class AddStore {

    constructor() {
        makeObservable(this, {
            addVehicle:action,  
        });
    }

    addVehicle = async (formData) => {
        
        const vehicleData = formData;
        VehicleAPI.addVehicle(vehicleData);
    }
}

const addStore = new AddStore();
autorun(() => {
    getStore.getData();
})
export default addStore;