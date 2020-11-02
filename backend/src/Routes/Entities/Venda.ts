import Constroller from '../../Controllers/Venda';
import { Application } from 'express';

export function Venda(app: Application) {
    const Venda = new Constroller();

    app.get('/cadastros/venda', (req, res) => Venda.getAll(req, res));

    app.get('/cadastros/venda/get',  (req, res) => Venda.get(req, res));

    app.put('/cadastros/venda',  (req, res) => Venda.update(req, res));

    app.post('/cadastros/venda',  (req, res) => Venda.create(req, res));

    app.delete('/cadastros/venda/del',  (req, res) => Venda.delete(req, res));
    

    app.get('/cadastros/venda/itens',  (req, res) => Venda.getItens(req, res));

    app.get('/cadastros/venda/item',  (req, res) => Venda.getItem(req, res));
}