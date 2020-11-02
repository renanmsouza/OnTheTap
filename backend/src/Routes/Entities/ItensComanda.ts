import Constroller from '../../Controllers/ItensComanda';
import { Application } from 'express';

export function ItensComanda(app: Application) {
    const ItensComanda = new Constroller();

    app.get('/cadastros/itenscomanda', (req, res) => ItensComanda.getAll(req, res));

    app.get('/cadastros/itenscomanda/get',  (req, res) => ItensComanda.get(req, res));

    app.put('/cadastros/itenscomanda',  (req, res) => ItensComanda.update(req, res));

    app.post('/cadastros/itenscomanda',  (req, res) => ItensComanda.create(req, res));;

    app.delete('/cadastros/itenscomanda/del',  (req, res) => ItensComanda.delete(req, res));
}