import CRUDController from '../../Components/CRUDController';
import ModelResumoCaixa from '../../Models/ResumoCaixa';
import { Request, Response } from 'express';

class ResumoCaixa extends CRUDController {
    constructor() {
        super(new ModelResumoCaixa('ResumoCaixa'));
    }

    async getMovimentos(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelResumoCaixa;

        await model.getMovimentos(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
    
    async getMovimento(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelResumoCaixa;

        await model.getMovimento(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
}

export default ResumoCaixa;