import Constroller from '../../Controllers/HistoricoMovimento';
import { Application } from 'express';
import Token from '../Token';

export function HistoricoMovimento(app: Application) {
    const HistoricoMovimento = new Constroller();

    app.get('/api/historicomovimento', Token.verifyJWT, (req, res) => HistoricoMovimento.getAll(req, res));

    app.get('/api/historicomovimento/get', Token.verifyJWT, (req, res) => HistoricoMovimento.get(req, res));

    app.put('/api/historicomovimento', Token.verifyJWT, (req, res) => HistoricoMovimento.update(req, res));

    app.post('/api/historicomovimento', Token.verifyJWT, (req, res) => HistoricoMovimento.create(req, res));;

    app.delete('/api/historicomovimento/del', Token.verifyJWT, (req, res) => HistoricoMovimento.delete(req, res));
}