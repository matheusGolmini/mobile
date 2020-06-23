import axios from 'axios';

const api = axios.create({
    baseURL: 'https://6f72532a75b8.ngrok.io/'
    // baseURL: 'http://02eb5fb1.ngrok.io/'
});

export default api;