import axios from 'axios';

const RestServer = axios.create({
    baseURL: 'http://localhost:3001'
})

export default RestServer;