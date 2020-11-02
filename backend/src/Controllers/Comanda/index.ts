import CRUDController from '../../Components/CRUDController';
import ModelComanda from '../../Models/Comanda';
import { Request, Response } from 'express';

class Comanda extends CRUDController {
    constructor() {
        super(new ModelComanda('Comanda'));
    }

    async getItens(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelComanda;

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

        const model = this.Model as ModelComanda;

        await model.getItem(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
}

export default Comanda;