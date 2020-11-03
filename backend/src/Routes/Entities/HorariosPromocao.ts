import Constroller from '../../Controllers/HorariosPromocao';
import { Application } from 'express';

export function HorariosPromocao(app: Application) {
    const HorariosPromocao = new Constroller();

    app.get('/api/horariospromocao', (req, res) => HorariosPromocao.getAll(req, res));

    app.get('/api/horariospromocao/get',  (req, res) => HorariosPromocao.get(req, res));

    app.put('/api/horariospromocao',  (req, res) => HorariosPromocao.update(req, res));

    app.post('/api/horariospromocao',  (req, res) => HorariosPromocao.create(req, res));;

    app.delete('/api/horariospromocao/del',  (req, res) => HorariosPromocao.delete(req, res));
}