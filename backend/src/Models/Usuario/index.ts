import CRUDModel from '../../Components/CRUDModel';

class Usuario extends CRUDModel {
    constructor(tableName: String) {
        super(tableName, undefined);
    }

    login(usuario: String, senha: String) {
        return new Promise((resolve, reject) => {
            this._conn.query({
                sql: 'Select * from Usuario Where Usuario = ? and Senha = ?',
                values: [usuario, senha]
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    console.log(rows);
                    resolve(rows);
                }
            });
        })
    }
}

export default Usuario;