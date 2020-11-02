import CRUDController from '../../Components/CRUDController';
import ModelUsuario from '../../Models/Usuario';
import { Request, Response } from 'express';

class Usuario extends CRUDController {
    constructor() {
        super(new ModelUsuario('Usuario'));
    }

    async login(req: Request, res: Response) {
        const { usuario, senha } = req.body;

        const model = this.Model as ModelUsuario;

        model.login(usuario, senha)
            .then((rows) => {
                if (rows) {
                    return res.status(401).json( rows );
                } else {
                    return res.status(200).json( rows );
                }
            })
            .catch((err) => {
                return res.status(400).json( err );
            }); 
            
        model.free();
    }
}

export default Usuario;