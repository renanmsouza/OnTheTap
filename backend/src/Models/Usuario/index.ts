import CRUDModel from '../../Components/CRUDModel';

class Usuario extends CRUDModel {
    constructor(tableName: String) {
        super(tableName, undefined);
    }

    login(usuario: String) {
        return new Promise((resolve, reject) => {
            this._conn = this._db.connection();
            
            this._conn.query({
                sql: 'Select * from Usuario Where Usuario = ?',
                values: [usuario]
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(rows);
                }
            });
        })
            
    }
}

export default Usuario;