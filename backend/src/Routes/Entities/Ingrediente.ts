import Constroller from '../../Controllers/Ingrediente';
import { Application } from 'express';

export function Ingrediente(app: Application) {
    const Ingrediente = new Constroller();

    app.get('/cadastros/ingrediente', (req, res) => Ingrediente.getAll(req, res));

    app.get('/cadastros/ingrediente/get',  (req, res) => Ingrediente.get(req, res));

    app.put('/cadastros/ingrediente',  (req, res) => Ingrediente.update(req, res));

    app.post('/cadastros/ingrediente',  (req, res) => Ingrediente.create(req, res));;

    app.delete('/cadastros/ingrediente/del',  (req, res) => Ingrediente.delete(req, res));
}