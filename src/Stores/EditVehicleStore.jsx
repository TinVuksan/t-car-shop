import {makeObservable, toJS, observable, action} from 'mobx';
import Axios from 'axios';
class EditStore {
    vehicle = [{
        id: "", Make: "", Model: "", Power: "", RegDate: "",  RegExpDate: "", Info: "", Image: "",
    }];
    modal = false;
    constructor() {
        makeObservable(this, {
            vehicle:observable,
            modal: observable,
            showModal:action,
            handleSubmit:action,
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
        editStore.modal = !editStore.modal;
     }

    

    handleSubmit = (vehicle) => {
        const vehicleData = toJS(vehicle)
        Axios.patch(`https://api.baasic.com/beta/t-car-shop/resources/Vehicles/${vehicleData.id}`, vehicleData)
        .then(() => {
            window.location.reload();
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

    




const editStore = new EditStore();
export default editStore;