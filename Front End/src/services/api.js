import axios from 'axios';

const api = axios.create({
    baseURL: "https://ominstackbackend.herokuapp.com"
});

export default api;