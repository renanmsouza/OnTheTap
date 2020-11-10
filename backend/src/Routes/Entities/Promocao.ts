import Constroller from '../../Controllers/Promocao';
import { Application } from 'express';
import Token from '../Token';

export function Promocao(app: Application) {
    const Promocao = new Constroller();

    app.get('/api/promocao', Token.verifyJWT, (req, res) => Promocao.getAll(req, res));

    app.get('/api/promocao/get', Token.verifyJWT, (req, res) => Promocao.get(req, res));

    app.put('/api/promocao', Token.verifyJWT, (req, res) => Promocao.update(req, res));

    app.post('/api/promocao', Token.verifyJWT, (req, res) => Promocao.create(req, res));

    app.delete('/api/promocao/del', Token.verifyJWT, (req, res) => Promocao.delete(req, res));
    

    app.get('/api/promocao/itens', Token.verifyJWT, (req, res) => Promocao.getItens(req, res));

    app.get('/api/promocao/item', Token.verifyJWT, (req, res) => Promocao.getItem(req, res));

    app.get('/api/promocao/horarios', Token.verifyJWT, (req, res) => Promocao.getHorarios(req, res));

    app.get('/api/promocao/horario', Token.verifyJWT, (req, res) => Promocao.getHorario(req, res));
}