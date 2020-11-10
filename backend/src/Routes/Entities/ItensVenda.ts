import Constroller from '../../Controllers/ItensVenda';
import { Application } from 'express';
import Token from '../Token';

export function ItensVenda(app: Application) {
    const ItensVenda = new Constroller();

    app.get('/api/itensvenda', Token.verifyJWT, (req, res) => ItensVenda.getAll(req, res));

    app.get('/api/itensvenda/get', Token.verifyJWT, (req, res) => ItensVenda.get(req, res));

    app.put('/api/itensvenda', Token.verifyJWT, (req, res) => ItensVenda.update(req, res));

    app.post('/api/itensvenda', Token.verifyJWT, (req, res) => ItensVenda.create(req, res));;

    app.delete('/api/itensvenda/del', Token.verifyJWT, (req, res) => ItensVenda.delete(req, res));
}