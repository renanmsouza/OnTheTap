import Constroller from '../../Controllers/MovimentosCaixa';
import { Application } from 'express';
import Token from '../Token';

export function MovimentosCaixa(app: Application) {
    const MovimentosCaixa = new Constroller();

    app.get('/api/movimentoscaixa', Token.verifyJWT, (req, res) => MovimentosCaixa.getAll(req, res));

    app.get('/api/movimentoscaixa/get', Token.verifyJWT, (req, res) => MovimentosCaixa.get(req, res));

    app.put('/api/movimentoscaixa', Token.verifyJWT, (req, res) => MovimentosCaixa.update(req, res));

    app.post('/api/movimentoscaixa', Token.verifyJWT, (req, res) => MovimentosCaixa.create(req, res));;

    app.delete('/api/movimentoscaixa/del', Token.verifyJWT, (req, res) => MovimentosCaixa.delete(req, res));
}