import CRUDModel from '../../Components/CRUDModel';

class ResumoCaixa extends CRUDModel {
    constructor(tableName: String) {
        super(tableName, undefined);
    }

    getMovimentos(data: Array<any>) {
        return new Promise((resolve, reject) => {
            this._conn = this._db.connection();
            // list query
            let query = 'Select * from MovimentosCaixa Where idResumoCaixa = ?';

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

    getMovimento(data: Array<any>) {
        return new Promise((resolve, reject) => {
            this._conn = this._db.connection();
            // list query
            let query = 'Select * from MovimentosCaixa Where idResumoCaixa = ? and idMovimento = ?';

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

export default ResumoCaixa;