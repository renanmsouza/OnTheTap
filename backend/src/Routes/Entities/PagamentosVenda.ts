import Constroller from '../../Controllers/PagamentosVenda';
import { Application } from 'express';

export function PagamentosVenda(app: Application) {
    const PagamentosVenda = new Constroller();

    app.get('/api/pagamentosvenda', (req, res) => PagamentosVenda.getAll(req, res));

    app.get('/api/pagamentosvenda/get',  (req, res) => PagamentosVenda.get(req, res));

    app.put('/api/pagamentosvenda',  (req, res) => PagamentosVenda.update(req, res));

    app.post('/api/pagamentosvenda',  (req, res) => PagamentosVenda.create(req, res));;

    app.delete('/api/pagamentosvenda/del',  (req, res) => PagamentosVenda.delete(req, res));
}