import Constroller from '../../Controllers/MovimentosCaixa';
import { Application } from 'express';

export function MovimentosCaixa(app: Application) {
    const MovimentosCaixa = new Constroller();

    app.get('/api/movimentoscaixa', (req, res) => MovimentosCaixa.getAll(req, res));

    app.get('/api/movimentoscaixa/get',  (req, res) => MovimentosCaixa.get(req, res));

    app.put('/api/movimentoscaixa',  (req, res) => MovimentosCaixa.update(req, res));

    app.post('/api/movimentoscaixa',  (req, res) => MovimentosCaixa.create(req, res));;

    app.delete('/api/movimentoscaixa/del',  (req, res) => MovimentosCaixa.delete(req, res));
}