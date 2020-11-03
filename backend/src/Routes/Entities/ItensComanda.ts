import Constroller from '../../Controllers/ItensComanda';
import { Application } from 'express';

export function ItensComanda(app: Application) {
    const ItensComanda = new Constroller();

    app.get('/api/itenscomanda', (req, res) => ItensComanda.getAll(req, res));

    app.get('/api/itenscomanda/get',  (req, res) => ItensComanda.get(req, res));

    app.put('/api/itenscomanda',  (req, res) => ItensComanda.update(req, res));

    app.post('/api/itenscomanda',  (req, res) => ItensComanda.create(req, res));;

    app.delete('/api/itenscomanda/del',  (req, res) => ItensComanda.delete(req, res));
}