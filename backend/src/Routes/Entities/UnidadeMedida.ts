import Constroller from '../../Controllers/UnidadeMedida';
import { Application } from 'express';

export function UnidadeMedida(app: Application) {
    const UnidadeMedida = new Constroller();

    app.get('/cadastros/unidademedida', (req, res) => UnidadeMedida.getAll(req, res));

    app.get('/cadastros/unidademedida/get',  (req, res) => UnidadeMedida.get(req, res));

    app.put('/cadastros/unidademedida',  (req, res) => UnidadeMedida.update(req, res));

    app.post('/cadastros/unidademedida',  (req, res) => UnidadeMedida.create(req, res));;

    app.delete('/cadastros/unidademedida/del',  (req, res) => UnidadeMedida.delete(req, res));
}