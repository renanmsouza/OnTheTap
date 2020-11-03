import Constroller from '../../Controllers/Comanda';
import { Application } from 'express';

export function Comanda(app: Application) {
    const Comanda = new Constroller();

    app.get('/api/comanda', (req, res) => Comanda.getAll(req, res));

    app.get('/api/comanda/get',  (req, res) => Comanda.get(req, res));

    app.put('/api/comanda',  (req, res) => Comanda.update(req, res));

    app.post('/api/comanda',  (req, res) => Comanda.create(req, res));

    app.delete('/api/comanda/del',  (req, res) => Comanda.delete(req, res));
    

    app.get('/api/comanda/itens',  (req, res) => Comanda.getItens(req, res));

    app.get('/api/comanda/item',  (req, res) => Comanda.getItem(req, res));
}