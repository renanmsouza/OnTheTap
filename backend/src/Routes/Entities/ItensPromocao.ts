import Constroller from '../../Controllers/ItensPromocao';
import { Application } from 'express';
import Token from '../Token';

export function ItensPromocao(app: Application) {
    const ItensPromocao = new Constroller();

    app.get('/api/itenspromocao', Token.verifyJWT, (req, res) => ItensPromocao.getAll(req, res));

    app.get('/api/itenspromocao/get', Token.verifyJWT, (req, res) => ItensPromocao.get(req, res));

    app.put('/api/itenspromocao', Token.verifyJWT, (req, res) => ItensPromocao.update(req, res));

    app.post('/api/itenspromocao', Token.verifyJWT, (req, res) => ItensPromocao.create(req, res));;

    app.delete('/api/itenspromocao/del', Token.verifyJWT, (req, res) => ItensPromocao.delete(req, res));
}