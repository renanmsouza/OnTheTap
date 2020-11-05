import express from 'express';
import 'dotenv/config';

const Server = express();

Server.use(express.Router());
Server.use(express.json());


export default () => {
    return Server;    
}
