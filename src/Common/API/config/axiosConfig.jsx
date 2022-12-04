import axios from 'axios';

const api = axios.create({
    withCredentials: true,
    baseURL: `https://api.baasic.com/beta/t-car-shop/resources`
 });
 
 export default api;