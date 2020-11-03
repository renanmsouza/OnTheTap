import Constroller from '../../Controllers/Ingrediente';
import { Application } from 'express';

export function Ingrediente(app: Application) {
    const Ingrediente = new Constroller();

    app.get('/api/ingrediente', (req, res) => Ingrediente.getAll(req, res));

    app.get('/api/ingrediente/get',  (req, res) => Ingrediente.get(req, res));

    app.put('/api/ingrediente',  (req, res) => Ingrediente.update(req, res));

    app.post('/api/ingrediente',  (req, res) => Ingrediente.create(req, res));;

    app.delete('/api/ingrediente/del',  (req, res) => Ingrediente.delete(req, res));
}