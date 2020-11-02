import Constroller from '../../Controllers/Usuario';
import { Application } from 'express';

export function Usuario(app: Application) {
    const Usuario = new Constroller();

    app.get('/cadastros/usuario', (req, res) => Usuario.getAll(req, res));

    app.get('/cadastros/usuario/get',  (req, res) => Usuario.get(req, res));

    app.put('/cadastros/usuario',  (req, res) => Usuario.update(req, res));

    app.post('/cadastros/usuario',  (req, res) => Usuario.create(req, res));;

    app.delete('/cadastros/usuario/del',  (req, res) => Usuario.delete(req, res));


    app.get('/cadastros/usuario/login',  (req, res) => Usuario.login(req, res));
}