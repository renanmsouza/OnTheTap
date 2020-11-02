import Constroller from '../../Controllers/ItensVenda';
import { Application } from 'express';

export function ItensVenda(app: Application) {
    const ItensVenda = new Constroller();

    app.get('/cadastros/itensvenda', (req, res) => ItensVenda.getAll(req, res));

    app.get('/cadastros/itensvenda/get',  (req, res) => ItensVenda.get(req, res));

    app.put('/cadastros/itensvenda',  (req, res) => ItensVenda.update(req, res));

    app.post('/cadastros/itensvenda',  (req, res) => ItensVenda.create(req, res));;

    app.delete('/cadastros/itensvenda/del',  (req, res) => ItensVenda.delete(req, res));
}