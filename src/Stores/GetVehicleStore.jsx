import {autorun, makeObservable, computed, toJS, observable} from 'mobx';
import Axios from 'axios'
class GetStore {
    vehicle = [];
    filter = "";
    page = 1;
    constructor() {
        makeObservable(this, {
            vehicle: observable,
            filter: observable,
            page:observable,
            filteredVehicles: computed,

        });
    }

    get filteredVehicles() {
        return this.vehicle
        .filter((vehicle) => vehicle.VehicleMake.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
        ); 
    }

    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }

    setFilter(filter) {
        this.filter = filter;
    }
    
    setPage(page) {
        this.page = page;
    }
}

const getStore = new GetStore(); 
const getData = () => {

    let apiURL = '';
    if(getStore.page <=0) {
        getStore.setPage(1);
         apiURL = `https://api.baasic.com/beta/t-car-shop/resources/Vehicles?rpp=${5}`;
    } else {
        apiURL = `https://api.baasic.com/beta/t-car-shop/resources/Vehicles?page=${getStore.page}&rpp=${5}&sort=VehicleMake`;
    }
         
    
    Axios.get(apiURL)
     .then((res) => {
            if(res.data.item === 0) {
                getStore.setPage(1);

            }
            getStore.setVehicle(toJS(res.data.item));
    })
    .catch((error) => {
        console.log(error);
    })
}

autorun(() => {
    getData();
})
    export default getStore;
