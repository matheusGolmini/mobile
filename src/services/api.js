import axios from 'axios';

const api = axios.create({
    baseURL: 'http://7796f059584b.ngrok.io/'
    // baseURL: 'http://02eb5fb1.ngrok.io/'
});

export default api;