import Constroller from '../../Controllers/PagamentosVenda';
import { Application } from 'express';

export function PagamentosVenda(app: Application) {
    const PagamentosVenda = new Constroller();

    app.get('/cadastros/pagamentosvenda', (req, res) => PagamentosVenda.getAll(req, res));

    app.get('/cadastros/pagamentosvenda/get',  (req, res) => PagamentosVenda.get(req, res));

    app.put('/cadastros/pagamentosvenda',  (req, res) => PagamentosVenda.update(req, res));

    app.post('/cadastros/pagamentosvenda',  (req, res) => PagamentosVenda.create(req, res));;

    app.delete('/cadastros/pagamentosvenda/del',  (req, res) => PagamentosVenda.delete(req, res));
}