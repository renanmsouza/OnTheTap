import Constroller from '../../Controllers/ResumoCaixa';
import { Application } from 'express';
import Token from '../Token';

export function ResumoCaixa(app: Application) {
    const ResumoCaixa = new Constroller();

    app.get('/api/resumocaixa', Token.verifyJWT, (req, res) => ResumoCaixa.getAll(req, res));

    app.get('/api/resumocaixa/get', Token.verifyJWT, (req, res) => ResumoCaixa.get(req, res));

    app.put('/api/resumocaixa', Token.verifyJWT, (req, res) => ResumoCaixa.update(req, res));

    app.post('/api/resumocaixa', Token.verifyJWT, (req, res) => ResumoCaixa.create(req, res));

    app.delete('/api/resumocaixa/del', Token.verifyJWT, (req, res) => ResumoCaixa.delete(req, res));
    

    app.get('/api/resumocaixa/movimentos', Token.verifyJWT, (req, res) => ResumoCaixa.getMovimentos(req, res));

    app.get('/api/resumocaixa/movimento', Token.verifyJWT, (req, res) => ResumoCaixa.getMovimento(req, res));
}