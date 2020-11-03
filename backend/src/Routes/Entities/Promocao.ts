import Constroller from '../../Controllers/Promocao';
import { Application } from 'express';

export function Promocao(app: Application) {
    const Promocao = new Constroller();

    app.get('/api/promocao', (req, res) => Promocao.getAll(req, res));

    app.get('/api/promocao/get',  (req, res) => Promocao.get(req, res));

    app.put('/api/promocao',  (req, res) => Promocao.update(req, res));

    app.post('/api/promocao',  (req, res) => Promocao.create(req, res));

    app.delete('/api/promocao/del',  (req, res) => Promocao.delete(req, res));
    

    app.get('/api/promocao/itens',  (req, res) => Promocao.getItens(req, res));

    app.get('/api/promocao/item',  (req, res) => Promocao.getItem(req, res));

    app.get('/api/promocao/horarios',  (req, res) => Promocao.getHorarios(req, res));

    app.get('/api/promocao/horario',  (req, res) => Promocao.getHorario(req, res));
}