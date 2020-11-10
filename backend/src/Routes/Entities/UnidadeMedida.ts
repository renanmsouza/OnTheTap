import Constroller from '../../Controllers/UnidadeMedida';
import { Application } from 'express';
import Token from '../Token';

export function UnidadeMedida(app: Application) {
    const UnidadeMedida = new Constroller();

    app.get('/api/unidademedida', Token.verifyJWT, (req, res) => UnidadeMedida.getAll(req, res));

    app.get('/api/unidademedida/get', Token.verifyJWT, (req, res) => UnidadeMedida.get(req, res));

    app.put('/api/unidademedida', Token.verifyJWT, (req, res) => UnidadeMedida.update(req, res));

    app.post('/api/unidademedida', Token.verifyJWT, (req, res) => UnidadeMedida.create(req, res));;

    app.delete('/api/unidademedida/del', Token.verifyJWT, (req, res) => UnidadeMedida.delete(req, res));
}