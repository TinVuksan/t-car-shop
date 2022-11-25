import {autorun, makeObservable, computed, toJS, observable} from 'mobx';
import Axios from 'axios'
class GetStore {
    vehicle = [];
    filter = "";
    page = 1;
    sort = "";
    properties = [];
    constructor() {
        makeObservable(this, {
            vehicle: observable,
            filter: observable,
            page:observable,
            sort:observable,
            properties: observable,
            filteredVehicles: computed,
            maxPageNum: computed,

        });
    }

    get filteredVehicles() {
        return this.vehicle
        .filter(vehicle => vehicle.VehicleMake.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
        ); 
    }

    get maxPageNum() {
        return Math.ceil(this.properties.totalRecords/this.properties.recordsPerPage)
    }

    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }

    setFilter(filter) {
        this.filter = filter;
    }
    
    setPage(page) {
        if(page === 0) {
            this.page = 1;
        }
        this.page = Math.abs(page);
    }

    setSort(sort) {
        this.sort = sort;
    }

    setProperties(properties) {
        this.properties = properties;
    }
}

const getStore = new GetStore(); 
const getData = () => {

    let apiURL = '';
    apiURL = `https://api.baasic.com/beta/t-car-shop/resources/Vehicles?page=${getStore.page}&rpp=${5}&sort=VehicleMake|${getStore.sort}`;
    Axios.get(apiURL)
     .then((res) => {
            getStore.setProperties(toJS(res.data));
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
