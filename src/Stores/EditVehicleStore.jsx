import {makeObservable, toJS, observable, action} from 'mobx';
import { VehicleAPI } from '../Common/API/VehicleAPI';

class EditStore {
    vehicle = [];
    modal = false;
    constructor() {
        makeObservable(this, {
            vehicle:observable,
            modal: observable,
            showModal:action,
            editVehicle:action,
            setVehicle:action,
        });
    }

    setModal(modal) {
        this.modal = modal;
    }

    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }

    showModal() {
        this.modal = !editStore.modal;
     }


    editVehicle =  async (vehicle) => {
        const vehicleData = toJS(vehicle)
        await VehicleAPI.editVehicle(vehicleData.id, vehicleData);
    }

    deleteVehicle = async (id) => {
        await VehicleAPI.deleteVehicle(id);
    }
}

const editStore = new EditStore();
export default editStore;