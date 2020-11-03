import Constroller from '../../Controllers/AdicionaisCategoria';
import { Application } from 'express';

export function AdicionaisCategoria(app: Application) {
    const AdicionaisCategoria = new Constroller();

    app.get('/api/adicionaiscategoria', (req, res) => AdicionaisCategoria.getAll(req, res));

    app.get('/api/adicionaiscategoria/get',  (req, res) => AdicionaisCategoria.get(req, res));

    app.put('/api/adicionaiscategoria',  (req, res) => AdicionaisCategoria.update(req, res));

    app.post('/api/adicionaiscategoria',  (req, res) => AdicionaisCategoria.create(req, res));;

    app.delete('/api/adicionaiscategoria/del',  (req, res) => AdicionaisCategoria.delete(req, res));
}