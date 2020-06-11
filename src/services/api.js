import axios from 'axios';

const api = axios.create({
    baseURL: 'http://70f0fa37695f.ngrok.io/'
    // baseURL: 'http://02eb5fb1.ngrok.io/'
});

export default api;