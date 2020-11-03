import Constroller from '../../Controllers/Categoria';
import { Application } from 'express';

export function Categoria(app: Application) {
    const Categoria = new Constroller();

    app.get('/api/categoria', (req, res) => Categoria.getAll(req, res));

    app.get('/api/categoria/get',  (req, res) => Categoria.get(req, res));

    app.put('/api/categoria',  (req, res) => Categoria.update(req, res));

    app.post('/api/categoria',  (req, res) => Categoria.create(req, res));;

    app.delete('/api/categoria/del',  (req, res) => Categoria.delete(req, res));
}