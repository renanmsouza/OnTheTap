import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

interface auth_cookie {
  auth: Boolean, 
  idUsuario: String,
  nome: String,
  admministrador: Boolean,
  caixa: Boolean,
  garcom: Boolean 
}

class Token {
    static verifyJWT(req: Request, res: Response, next: NextFunction){
        if (String(process.env.DEV_PASS) === 'CottonSheep9173*') {
          console.log('Developer Pass!!')
          next();
        }else{
          const token = req.cookies.auth_token
          if (!token) 
              return res.status(401).json({ auth: false, message: 'No token provided.' });
          
          jwt.verify( String(token), String(process.env.AUTH_TOKEN), function(err, decoded) {
            const dec_auth = decoded as auth_cookie;
  
            if (err) 
              return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            
            if (!dec_auth.auth) {
              return res.status(500).json({ auth: false, message: 'Invalid Token!' });  
            }
            
            next();
          });
        }

    }
}

export default Token;