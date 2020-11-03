import CRUDController from '../../Components/CRUDController';
import ModelPromocao from '../../Models/Promocao';
import { Request, Response } from 'express';

class Promocao extends CRUDController {
    constructor() {
        super(new ModelPromocao('Promocao'));
    }

    async getItens(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelPromocao;

        await model.getItens(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
    
    async getItem(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelPromocao;

        await model.getItem(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async getHorarios(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelPromocao;

        await model.getHorarios(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
    
    async getHorario(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelPromocao;

        await model.getHorario(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
}

export default Promocao;