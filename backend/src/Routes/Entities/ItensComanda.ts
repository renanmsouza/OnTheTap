import Constroller from '../../Controllers/ItensComanda';
import { Application } from 'express';
import Token from '../Token';

export function ItensComanda(app: Application) {
    const ItensComanda = new Constroller();

    app.get('/api/itenscomanda', Token.verifyJWT, (req, res) => ItensComanda.getAll(req, res));

    app.get('/api/itenscomanda/get', Token.verifyJWT, (req, res) => ItensComanda.get(req, res));

    app.put('/api/itenscomanda', Token.verifyJWT, (req, res) => ItensComanda.update(req, res));

    app.post('/api/itenscomanda', Token.verifyJWT, (req, res) => ItensComanda.create(req, res));;

    app.delete('/api/itenscomanda/del', Token.verifyJWT, (req, res) => ItensComanda.delete(req, res));
}