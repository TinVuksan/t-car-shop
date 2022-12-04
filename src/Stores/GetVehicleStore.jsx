import {autorun, makeObservable, computed, toJS, observable} from 'mobx';
import { VehicleAPI } from '../Common/API/VehicleAPI';
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
    
    async getData() {
        const res = await VehicleAPI.getAll(this.page, 5, this.sort);
        this.setProperties(toJS(res.data));
        this.setVehicle(toJS(res.data.item));
    }
}

const getStore = new GetStore(); 

autorun(() => {
    getStore.getData();
})
    export default getStore;
