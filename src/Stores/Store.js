import {makeAutoObservable, toJS} from 'mobx';
import Axios from 'axios'

class Store {
    vehicle = [];
    filter = "";
    sort = false;
    constructor() {
        makeAutoObservable(this);
    }

    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }

    setFilter(filter) {
        this.filter = filter;
    }
    
    setSort(sort) {
        this.sort = sort;
    }
}

const store = new Store(); 

Axios.get('https://api.baasic.com/beta/t-car-shop/resources/Vehicles/')
     .then((res) => {
        store.setVehicle(toJS(res.data.item));
    })
    .catch((error) => {
        console.log(error)
    })


    export default store;
