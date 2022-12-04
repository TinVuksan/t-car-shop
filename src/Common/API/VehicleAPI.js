import api from './config/axiosConfig'
export const VehicleAPI = {
    getAll: async function(page, rpp, sort) {
        const res = await api.request({
            url:`/Vehicles?page=${page}&rpp=${rpp}&sort=VehicleMake|${sort}`,
            method:'GET'
        })
        return res 
    },

    editVehicle: async function(id, data) {
        await api.request({
            url:`/Vehicles/${id}`,
            method:'PATCH',
            data: data,
        })

    },

    addVehicle: async function(data) {
         await api.request({
            url:`/Vehicles/`,
            method:'POST',
            data:data
        })
    }
}