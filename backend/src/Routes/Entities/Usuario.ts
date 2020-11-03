import Constroller from '../../Controllers/Usuario';
import { Application } from 'express';

export function Usuario(app: Application) {
    const Usuario = new Constroller();

    app.get('/api/usuario', (req, res) => Usuario.getAll(req, res));

    app.get('/api/usuario/get',  (req, res) => Usuario.get(req, res));

    app.put('/api/usuario',  (req, res) => Usuario.update(req, res));

    app.post('/api/usuario',  (req, res) => Usuario.create(req, res));;

    app.delete('/api/usuario/del',  (req, res) => Usuario.delete(req, res));


    app.get('/api/usuario/login',  (req, res) => Usuario.login(req, res));
}