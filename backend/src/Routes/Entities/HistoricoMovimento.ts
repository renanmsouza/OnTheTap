import Constroller from '../../Controllers/HistoricoMovimento';
import { Application } from 'express';

export function HistoricoMovimento(app: Application) {
    const HistoricoMovimento = new Constroller();

    app.get('/api/historicomovimento', (req, res) => HistoricoMovimento.getAll(req, res));

    app.get('/api/historicomovimento/get',  (req, res) => HistoricoMovimento.get(req, res));

    app.put('/api/historicomovimento',  (req, res) => HistoricoMovimento.update(req, res));

    app.post('/api/historicomovimento',  (req, res) => HistoricoMovimento.create(req, res));;

    app.delete('/api/historicomovimento/del',  (req, res) => HistoricoMovimento.delete(req, res));
}