import CRUDModel from '../../Components/CRUDModel';

class Produto extends CRUDModel {
    constructor(tableName: String) {
        super(tableName, undefined);
    }

    getIngredientes(data: Array<any>) {
        return new Promise((resolve, reject) => {
            this._conn = this._db.connection();
            // list query
            let query = 'Select * from Ingrediente Where idProduto = ?';

            this._conn.query({
                sql: query,
                values: data
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

    getIngrediente(data: Array<any>) {
        return new Promise((resolve, reject) => {
            this._conn = this._db.connection();
            // list query
            let query = 'Select * from Ingrediente Where idIngrediente = ? and idProduto = ?';

            this._conn.query({
                sql: query,
                values: data
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

export default Produto;