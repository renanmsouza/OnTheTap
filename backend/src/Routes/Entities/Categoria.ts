import Constroller from '../../Controllers/Categoria';
import { Application } from 'express';
import Token from '../Token';

export function Categoria(app: Application) {
    const Categoria = new Constroller();

    app.get('/api/categoria', Token.verifyJWT, (req, res) => Categoria.getAll(req, res));

    app.get('/api/categoria/get', Token.verifyJWT, (req, res) => Categoria.get(req, res));

    app.put('/api/categoria', Token.verifyJWT, (req, res) => Categoria.update(req, res));

    app.post('/api/categoria', Token.verifyJWT, (req, res) => Categoria.create(req, res));;

    app.delete('/api/categoria/del', Token.verifyJWT, (req, res) => Categoria.delete(req, res));
}