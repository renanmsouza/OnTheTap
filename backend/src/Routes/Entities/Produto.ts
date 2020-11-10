import Constroller from '../../Controllers/Produto';
import { Application } from 'express';
import Token from '../Token';

export function Produto(app: Application) {
    const Produto = new Constroller();

    app.get('/api/produto', Token.verifyJWT, (req, res) => Produto.getAll(req, res));

    app.get('/api/produto/get', Token.verifyJWT, (req, res) => Produto.get(req, res));

    app.put('/api/produto', Token.verifyJWT, (req, res) => Produto.update(req, res));

    app.post('/api/produto', Token.verifyJWT, (req, res) => Produto.create(req, res));

    app.delete('/api/produto/del', Token.verifyJWT, (req, res) => Produto.delete(req, res));
    

    app.get('/api/produto/itens', Token.verifyJWT, (req, res) => Produto.getIngrediente(req, res));

    app.get('/api/produto/item', Token.verifyJWT, (req, res) => Produto.getIngredientes(req, res));
}