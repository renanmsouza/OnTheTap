import Constroller from '../../Controllers/Produto';
import { Application } from 'express';

export function Produto(app: Application) {
    const Produto = new Constroller();

    app.get('/cadastros/produto', (req, res) => Produto.getAll(req, res));

    app.get('/cadastros/produto/get',  (req, res) => Produto.get(req, res));

    app.put('/cadastros/produto',  (req, res) => Produto.update(req, res));

    app.post('/cadastros/produto',  (req, res) => Produto.create(req, res));

    app.delete('/cadastros/produto/del',  (req, res) => Produto.delete(req, res));
    

    app.get('/cadastros/produto/itens',  (req, res) => Produto.getIngrediente(req, res));

    app.get('/cadastros/produto/item',  (req, res) => Produto.getIngredientes(req, res));
}