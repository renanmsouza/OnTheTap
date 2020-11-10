import Constroller from '../../Controllers/FormaPagto';
import { Application } from 'express';
import Token from '../Token';

export function FormaPagto(app: Application) {
    const FormaPagto = new Constroller();

    app.get('/api/formapagto', Token.verifyJWT, (req, res) => FormaPagto.getAll(req, res));

    app.get('/api/formapagto/get', Token.verifyJWT, (req, res) => FormaPagto.get(req, res));

    app.put('/api/formapagto', Token.verifyJWT, (req, res) => FormaPagto.update(req, res));

    app.post('/api/formapagto', Token.verifyJWT, (req, res) => FormaPagto.create(req, res));;

    app.delete('/api/formapagto/del', Token.verifyJWT, (req, res) => FormaPagto.delete(req, res));
}