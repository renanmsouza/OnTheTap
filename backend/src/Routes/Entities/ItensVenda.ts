import Constroller from '../../Controllers/ItensVenda';
import { Application } from 'express';

export function ItensVenda(app: Application) {
    const ItensVenda = new Constroller();

    app.get('/api/itensvenda', (req, res) => ItensVenda.getAll(req, res));

    app.get('/api/itensvenda/get',  (req, res) => ItensVenda.get(req, res));

    app.put('/api/itensvenda',  (req, res) => ItensVenda.update(req, res));

    app.post('/api/itensvenda',  (req, res) => ItensVenda.create(req, res));;

    app.delete('/api/itensvenda/del',  (req, res) => ItensVenda.delete(req, res));
}