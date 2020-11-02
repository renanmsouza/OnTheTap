import Constroller from '../../Controllers/Categoria';
import { Application } from 'express';

export function Categoria(app: Application) {
    const Categoria = new Constroller();

    app.get('/cadastros/categoria', (req, res) => Categoria.getAll(req, res));

    app.get('/cadastros/categoria/get',  (req, res) => Categoria.get(req, res));

    app.put('/cadastros/categoria',  (req, res) => Categoria.update(req, res));

    app.post('/cadastros/categoria',  (req, res) => Categoria.create(req, res));;

    app.delete('/cadastros/categoria/del',  (req, res) => Categoria.delete(req, res));
}