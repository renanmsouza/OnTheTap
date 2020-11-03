import Constroller from '../../Controllers/FormaPagto';
import { Application } from 'express';

export function FormaPagto(app: Application) {
    const FormaPagto = new Constroller();

    app.get('/api/formapagto', (req, res) => FormaPagto.getAll(req, res));

    app.get('/api/formapagto/get',  (req, res) => FormaPagto.get(req, res));

    app.put('/api/formapagto',  (req, res) => FormaPagto.update(req, res));

    app.post('/api/formapagto',  (req, res) => FormaPagto.create(req, res));;

    app.delete('/api/formapagto/del',  (req, res) => FormaPagto.delete(req, res));
}