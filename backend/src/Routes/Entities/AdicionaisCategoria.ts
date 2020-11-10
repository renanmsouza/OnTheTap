import Constroller from '../../Controllers/AdicionaisCategoria';
import { Application } from 'express';
import Token from '../Token';

export function AdicionaisCategoria(app: Application) {
    const AdicionaisCategoria = new Constroller();

    app.get('/api/adicionaiscategoria', Token.verifyJWT, (req, res) => AdicionaisCategoria.getAll(req, res));

    app.get('/api/adicionaiscategoria/get', Token.verifyJWT, (req, res) => AdicionaisCategoria.get(req, res));

    app.put('/api/adicionaiscategoria', Token.verifyJWT, (req, res) => AdicionaisCategoria.update(req, res));

    app.post('/api/adicionaiscategoria', Token.verifyJWT, (req, res) => AdicionaisCategoria.create(req, res));;

    app.delete('/api/adicionaiscategoria/del', Token.verifyJWT, (req, res) => AdicionaisCategoria.delete(req, res));
}