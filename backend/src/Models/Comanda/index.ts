import CRUDModel from '../../Components/CRUDModel';

class Comanda extends CRUDModel {
    constructor(tableName: String) {
        super(tableName, undefined);
    }

    getItens(data: Array<any>) {
        return new Promise((resolve, reject) => {
            this._conn = this._db.connection();
            // list query
            let query = 'Select * from ItensComanda Where idComanda = ?';

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
            let query = 'Select * from ItensComanda Where idComanda = ? and idProduto = ?';

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

export default Comanda;