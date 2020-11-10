import Constroller from '../../Controllers/Usuario';
import { Application } from 'express';
import Token from '../Token';

export function Usuario(app: Application) {
    const Usuario = new Constroller();

    app.get('/api/usuario', Token.verifyJWT, (req, res) => Usuario.getAll(req, res));

    app.get('/api/usuario/get', Token.verifyJWT, (req, res) => Usuario.get(req, res));

    app.put('/api/usuario', Token.verifyJWT, (req, res) => Usuario.update(req, res));

    app.post('/api/usuario', Token.verifyJWT, (req, res) => Usuario.create(req, res));;

    app.delete('/api/usuario/del', Token.verifyJWT, (req, res) => Usuario.delete(req, res));


    app.get('/api/usuario/login', (req, res) => Usuario.login(req, res));
}