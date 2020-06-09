import axios from 'axios';

const api = axios.create({
    baseURL: 'http://0fbf815a6b95.ngrok.io/'
    // baseURL: 'http://02eb5fb1.ngrok.io/'
});

export default api;