import axios from 'axios';

const api = axios.create({
    baseURL: 'https://1a7f18c65147.ngrok.io/'
    // baseURL: 'http://02eb5fb1.ngrok.io/'
});

export default api;