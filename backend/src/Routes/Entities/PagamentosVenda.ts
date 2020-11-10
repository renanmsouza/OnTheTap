import Constroller from '../../Controllers/PagamentosVenda';
import { Application } from 'express';
import Token from '../Token';

export function PagamentosVenda(app: Application) {
    const PagamentosVenda = new Constroller();

    app.get('/api/pagamentosvenda', Token.verifyJWT, (req, res) => PagamentosVenda.getAll(req, res));

    app.get('/api/pagamentosvenda/get', Token.verifyJWT, (req, res) => PagamentosVenda.get(req, res));

    app.put('/api/pagamentosvenda', Token.verifyJWT, (req, res) => PagamentosVenda.update(req, res));

    app.post('/api/pagamentosvenda', Token.verifyJWT, (req, res) => PagamentosVenda.create(req, res));;

    app.delete('/api/pagamentosvenda/del', Token.verifyJWT, (req, res) => PagamentosVenda.delete(req, res));
}