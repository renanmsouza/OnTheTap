import express from 'express';

const Server = express();

Server.use(express.Router());
Server.use(express.json());

export default () => {
    return Server;    
}
