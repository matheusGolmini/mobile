import axios from 'axios';

const api = axios.create({
    baseURL: 'https://021943d89116.ngrok.io/'
    // baseURL: 'http://02eb5fb1.ngrok.io/'
});

export default api;