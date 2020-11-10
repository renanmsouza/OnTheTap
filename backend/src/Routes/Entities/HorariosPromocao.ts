import Constroller from '../../Controllers/HorariosPromocao';
import { Application } from 'express';
import Token from '../Token';

export function HorariosPromocao(app: Application) {
    const HorariosPromocao = new Constroller();

    app.get('/api/horariospromocao', Token.verifyJWT, (req, res) => HorariosPromocao.getAll(req, res));

    app.get('/api/horariospromocao/get', Token.verifyJWT, (req, res) => HorariosPromocao.get(req, res));

    app.put('/api/horariospromocao', Token.verifyJWT, (req, res) => HorariosPromocao.update(req, res));

    app.post('/api/horariospromocao', Token.verifyJWT, (req, res) => HorariosPromocao.create(req, res));;

    app.delete('/api/horariospromocao/del', Token.verifyJWT, (req, res) => HorariosPromocao.delete(req, res));
}