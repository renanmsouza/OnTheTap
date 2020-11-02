import CRUDController from '../../Components/CRUDController';
import ModelProduto from '../../Models/Produto';
import { Request, Response } from 'express';

class Produto extends CRUDController {
    constructor() {
        super(new ModelProduto('Produto'));
    }

    async getIngredientes(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelProduto;

        await model.getIngredientes(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
    
    async getIngrediente(req: Request, res: Response) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = this.Model as ModelProduto;

        await model.getIngrediente(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
}

export default Produto;