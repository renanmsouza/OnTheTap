import Constroller from '../../Controllers/Comanda';
import { Application } from 'express';
import Token from '../Token';

export function Comanda(app: Application) {
    const Comanda = new Constroller();

    app.get('/api/comanda', Token.verifyJWT, (req, res) => Comanda.getAll(req, res));

    app.get('/api/comanda/get', Token.verifyJWT, (req, res) => Comanda.get(req, res));

    app.put('/api/comanda', Token.verifyJWT, (req, res) => Comanda.update(req, res));

    app.post('/api/comanda', Token.verifyJWT, (req, res) => Comanda.create(req, res));

    app.delete('/api/comanda/del', Token.verifyJWT, (req, res) => Comanda.delete(req, res));
    

    app.get('/api/comanda/itens', Token.verifyJWT, (req, res) => Comanda.getItens(req, res));

    app.get('/api/comanda/item', Token.verifyJWT, (req, res) => Comanda.getItem(req, res));
}