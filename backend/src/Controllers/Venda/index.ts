import CRUDController from '../../Components/CRUDController';
import ModelVenda from '../../Models/Venda';
import { Request, Response } from 'express';

class Venda extends CRUDController {
    constructor() {
        super(new ModelVenda('Venda'));
    }

    async getItens(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelVenda;

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

        const model = this.Model as ModelVenda;

        await model.getItem(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async getPagamentos(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelVenda;

        await model.getPagamentos(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
    
    async getPagamento(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelVenda;

        await model.getPagamento(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
}

export default Venda;