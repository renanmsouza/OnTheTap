import Constroller from '../../Controllers/Produto';
import { Application } from 'express';

export function Produto(app: Application) {
    const Produto = new Constroller();

    app.get('/api/produto', (req, res) => Produto.getAll(req, res));

    app.get('/api/produto/get',  (req, res) => Produto.get(req, res));

    app.put('/api/produto',  (req, res) => Produto.update(req, res));

    app.post('/api/produto',  (req, res) => Produto.create(req, res));

    app.delete('/api/produto/del',  (req, res) => Produto.delete(req, res));
    

    app.get('/api/produto/itens',  (req, res) => Produto.getIngrediente(req, res));

    app.get('/api/produto/item',  (req, res) => Produto.getIngredientes(req, res));
}