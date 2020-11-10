import Constroller from '../../Controllers/Ingrediente';
import { Application } from 'express';
import Token from '../Token';

export function Ingrediente(app: Application) {
    const Ingrediente = new Constroller();

    app.get('/api/ingrediente', Token.verifyJWT, (req, res) => Ingrediente.getAll(req, res));

    app.get('/api/ingrediente/get', Token.verifyJWT, (req, res) => Ingrediente.get(req, res));

    app.put('/api/ingrediente', Token.verifyJWT, (req, res) => Ingrediente.update(req, res));

    app.post('/api/ingrediente', Token.verifyJWT, (req, res) => Ingrediente.create(req, res));;

    app.delete('/api/ingrediente/del', Token.verifyJWT, (req, res) => Ingrediente.delete(req, res));
}