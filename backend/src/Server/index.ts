import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const Server = express();

Server.use(express.Router());
Server.use(express.json());
Server.use(cookieParser());
Server.use(cors());

export default () => {
    return Server;    
}
