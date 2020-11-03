import Constroller from '../../Controllers/ItensPromocao';
import { Application } from 'express';

export function ItensPromocao(app: Application) {
    const ItensPromocao = new Constroller();

    app.get('/api/itenspromocao', (req, res) => ItensPromocao.getAll(req, res));

    app.get('/api/itenspromocao/get',  (req, res) => ItensPromocao.get(req, res));

    app.put('/api/itenspromocao',  (req, res) => ItensPromocao.update(req, res));

    app.post('/api/itenspromocao',  (req, res) => ItensPromocao.create(req, res));;

    app.delete('/api/itenspromocao/del',  (req, res) => ItensPromocao.delete(req, res));
}