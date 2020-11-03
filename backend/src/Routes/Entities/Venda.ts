import Constroller from '../../Controllers/Venda';
import { Application } from 'express';

export function Venda(app: Application) {
    const Venda = new Constroller();

    app.get('/api/venda', (req, res) => Venda.getAll(req, res));

    app.get('/api/venda/get',  (req, res) => Venda.get(req, res));

    app.put('/api/venda',  (req, res) => Venda.update(req, res));

    app.post('/api/venda',  (req, res) => Venda.create(req, res));

    app.delete('/api/venda/del',  (req, res) => Venda.delete(req, res));
    

    app.get('/api/venda/itens',  (req, res) => Venda.getItens(req, res));

    app.get('/api/venda/item',  (req, res) => Venda.getItem(req, res));

    app.get('/api/venda/pagamentos',  (req, res) => Venda.getItens(req, res));

    app.get('/api/venda/pagamento',  (req, res) => Venda.getItem(req, res));
}