import CRUDModel from '../../Components/CRUDModel';

class Venda extends CRUDModel {
    constructor(tableName: String) {
        super(tableName, undefined);
    }

    getItens(data: Array<any>) {
        return new Promise((resolve, reject) => {
            this._conn = this._db.connection();
            // list query
            let query = 'Select * from ItensVenda Where idVenda = ?';

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

    getItem(data: Array<any>) {
        return new Promise((resolve, reject) => {
            this._conn = this._db.connection();
            // list query
            let query = 'Select * from ItensVenda Where idVenda = ? and idProduto = ?';

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

export default Venda;