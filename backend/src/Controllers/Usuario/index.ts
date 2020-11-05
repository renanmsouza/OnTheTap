import CRUDController from '../../Components/CRUDController';
import ModelUsuario from '../../Models/Usuario';
import { Request, Response } from 'express';
import 'dotenv/config';
import CryptoJS from 'crypto-js';

interface usuarios {
    idUsuario: Number,
    Nome: String,
    Usuario: String,
    Senha: String,
    Admministrador: Boolean,
    Caixa: Boolean,
    Garcon: Boolean    
}

class Usuario extends CRUDController {
    constructor() {
        super(new ModelUsuario('Usuario'));
    }

    async create(req: Request, res: Response) {
        var data = req.body;
        var { Senha } = data;
        const Key = process.env.PASSWORD;

        const encryptSenha = CryptoJS.AES.encrypt(Senha, String(Key)).toString();

        data = {...data, Senha: encryptSenha};

        const model = this.Model;

        await model.create(data)
            .then((rows) => {
                return res.status(201).json(rows);
            })
            .catch((err) => {
                return res.status(400).json( err );                                                                                                                                                                                                                                            
            });  
        
        model.free();
    }

    async login(req: Request, res: Response) {
        const { Usuario, Senha } = req.body;
        const Key = process.env.PASSWORD;
        var usuario;

        const model = this.Model as ModelUsuario;

        model.login(Usuario)
            .then((rows) => {
                // return res.status(201).json(rows);
                usuario = rows as Array<usuarios>;
                const bytes = CryptoJS.AES.decrypt(String(usuario[0].Senha), String(Key));

                if (Senha === bytes.toString(CryptoJS.enc.Utf8)) { 
                    return res.status(201).json({ message: 'Sucesso' });
                }else{
                    return res.status(401).json({ erro: 'Usuário ou Senha Inválidos' });
                } 
            })
            .catch((err) => {
                return res.status(400).json( err );                                                                                                                                                                                                                                            
            });
            
        model.free();
    }
}

export default Usuario;