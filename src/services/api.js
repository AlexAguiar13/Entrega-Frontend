import axios from 'axios';

const  api = axios.create({
   baseURL: 'https://entrega-backend.herokuapp.com',
});

export default api;