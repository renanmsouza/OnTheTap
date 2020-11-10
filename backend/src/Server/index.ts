import express from 'express';
import cookieParser from 'cookie-parser';

const Server = express();

Server.use(express.Router());
Server.use(express.json());
Server.use(cookieParser());

export default () => {
    return Server;    
}
