import Constroller from '../../Controllers/FormaPagto';
import { Application } from 'express';

export function FormaPagto(app: Application) {
    const FormaPagto = new Constroller();

    app.get('/cadastros/formapagto', (req, res) => FormaPagto.getAll(req, res));

    app.get('/cadastros/formapagto/get',  (req, res) => FormaPagto.get(req, res));

    app.put('/cadastros/formapagto',  (req, res) => FormaPagto.update(req, res));

    app.post('/cadastros/formapagto',  (req, res) => FormaPagto.create(req, res));;

    app.delete('/cadastros/formapagto/del',  (req, res) => FormaPagto.delete(req, res));
}