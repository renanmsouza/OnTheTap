import Constroller from '../../Controllers/Comanda';
import { Application } from 'express';

export function Comanda(app: Application) {
    const Comanda = new Constroller();

    app.get('/cadastros/comanda', (req, res) => Comanda.getAll(req, res));

    app.get('/cadastros/comanda/get',  (req, res) => Comanda.get(req, res));

    app.put('/cadastros/comanda',  (req, res) => Comanda.update(req, res));

    app.post('/cadastros/comanda',  (req, res) => Comanda.create(req, res));

    app.delete('/cadastros/comanda/del',  (req, res) => Comanda.delete(req, res));
    

    app.get('/cadastros/comanda/itens',  (req, res) => Comanda.getItens(req, res));

    app.get('/cadastros/comanda/item',  (req, res) => Comanda.getItem(req, res));
}