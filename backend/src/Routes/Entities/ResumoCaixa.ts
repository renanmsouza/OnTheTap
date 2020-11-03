import Constroller from '../../Controllers/ResumoCaixa';
import { Application } from 'express';

export function ResumoCaixa(app: Application) {
    const ResumoCaixa = new Constroller();

    app.get('/api/resumocaixa', (req, res) => ResumoCaixa.getAll(req, res));

    app.get('/api/resumocaixa/get',  (req, res) => ResumoCaixa.get(req, res));

    app.put('/api/resumocaixa',  (req, res) => ResumoCaixa.update(req, res));

    app.post('/api/resumocaixa',  (req, res) => ResumoCaixa.create(req, res));

    app.delete('/api/resumocaixa/del',  (req, res) => ResumoCaixa.delete(req, res));
    

    app.get('/api/resumocaixa/movimentos',  (req, res) => ResumoCaixa.getMovimentos(req, res));

    app.get('/api/resumocaixa/movimento',  (req, res) => ResumoCaixa.getMovimento(req, res));
}