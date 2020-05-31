import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.11:3333'
    // baseURL: 'http://02eb5fb1.ngrok.io/'
})

export default api;