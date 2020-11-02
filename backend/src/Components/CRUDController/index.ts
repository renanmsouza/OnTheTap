import CRUDModel from '../CRUDModel';
import { Request, Response } from 'express';

class CRUDController {
    //protected
    protected Model: CRUDModel;

    constructor(model: CRUDModel) {
        this.Model = model;
    }

    async getAll(req: Request, res: Response) {
        const model = this.Model;

        await model.getAll()
            .then((rows) => {
                return res.status(200).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async get(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model;

        await model.get(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async update(req: Request, res: Response) {
        const { keys, fields } = req.body;
        const data = Object.values(fields).concat(Object.values(keys));

        const model = this.Model;

        await model.update(data)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async create(req: Request, res: Response) {
        var data = req.body;

        const model = this.Model;

        await model.create(data)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async delete(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model;

        await model.delete(data)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
}

export default CRUDController;