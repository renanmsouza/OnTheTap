import Constroller from '../../Controllers/UnidadeMedida';
import { Application } from 'express';

export function UnidadeMedida(app: Application) {
    const UnidadeMedida = new Constroller();

    app.get('/api/unidademedida', (req, res) => UnidadeMedida.getAll(req, res));

    app.get('/api/unidademedida/get',  (req, res) => UnidadeMedida.get(req, res));

    app.put('/api/unidademedida',  (req, res) => UnidadeMedida.update(req, res));

    app.post('/api/unidademedida',  (req, res) => UnidadeMedida.create(req, res));;

    app.delete('/api/unidademedida/del',  (req, res) => UnidadeMedida.delete(req, res));
}