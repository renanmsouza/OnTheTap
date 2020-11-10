import Constroller from '../../Controllers/Venda';
import { Application } from 'express';
import Token from '../Token';

export function Venda(app: Application) {
    const Venda = new Constroller();

    app.get('/api/venda', Token.verifyJWT, (req, res) => Venda.getAll(req, res));

    app.get('/api/venda/get', Token.verifyJWT, (req, res) => Venda.get(req, res));

    app.put('/api/venda', Token.verifyJWT, (req, res) => Venda.update(req, res));

    app.post('/api/venda', Token.verifyJWT, (req, res) => Venda.create(req, res));

    app.delete('/api/venda/del', Token.verifyJWT, (req, res) => Venda.delete(req, res));
    

    app.get('/api/venda/itens', Token.verifyJWT, (req, res) => Venda.getItens(req, res));

    app.get('/api/venda/item', Token.verifyJWT, (req, res) => Venda.getItem(req, res));

    app.get('/api/venda/pagamentos', Token.verifyJWT, (req, res) => Venda.getItens(req, res));

    app.get('/api/venda/pagamento', Token.verifyJWT, (req, res) => Venda.getItem(req, res));
}