import { Connection } from 'mysql';
import Database from '../../Database';

class CRUDModel {
    //protected
        protected _tableName: String;
        protected _viewName: String | undefined;
        protected _keyList = Array();
        protected _fieldList = Array();
        protected _conn!: Connection;

        protected _db = Database;
    //public

    constructor(tableName: String, viewName: String | undefined) {
        this._tableName = tableName;
        this._viewName = viewName;
    }

    free() {
        this._conn.end();
    }

    // Define os campos da Tabela
    setFileldList() {
        return new Promise((resolve) => {
            this._conn = this._db.connection();

            this._fieldList = [];
            this._keyList = [];
            this._conn.query({
                sql: 'SHOW columns FROM '+this._tableName,
                values: []
            }, 
            (err, rows) => {
                if (err) {
                    this._fieldList = [];
                    this._keyList = [];

                    resolve(false);
                } else {
                    for (let i = 0; i < rows.length; i++) {
                        let row = rows[i];
                        
                        if (row.Key === 'PRI') {
                            this._keyList.push(row.Field);
                        }else{
                            this._fieldList.push(row.Field);
                        }
                    }
    
                    resolve(true);
                }
            });
        })   
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this._conn = this._db.connection();

            var table = this._viewName || this._tableName;

            // getAll query
            let query = 'Select * from '+table;

            this._conn.query({
                sql: query,
                values: []
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

    get(data: Array<any>) {
        return new Promise( async (resolve, reject) => {
            this._conn = this._db.connection();

            var table = this._viewName || this._tableName;
            
            var query = '';
            // get query
            await this.setFileldList()
                .then(() => {
                    query = 'Select * from '+ table +' Where '
                    for(let i = 0; i < this._keyList.length; i++) {
                        if (i > 1) {
                            query = query + ' and '
                        }
                        
                        query = query + this._keyList[i] + ' = ?';
                    }
                });
            
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

    update(data: Array<any>) {
        return new Promise( async (resolve, reject) => {
            this._conn = this._db.connection();

            var query = '';
            // update query
            await this.setFileldList()
                .then(() => {
                    // Fields
                    query = 'Update '+this._tableName+' set ';
                    for (let i = 0; i < this._fieldList.length; i++) {
                        if (i < this._fieldList.length - 1) {
                            query = query + this._fieldList[i] + ' = ?, '
                        }else{
                            query = query + this._fieldList[i] + ' = ?';    
                        }                 
                    }
                    // Where
                    query = query + ' Where ';
                    for (let i = 0; i < this._keyList.length; i++) {
                        if (i < this._keyList.length - 1) {
                            query = query + this._keyList[i] + ' = ? and '
                        }else{
                            query = query + this._keyList[i] + ' = ?';    
                        }
                        
                    }
                });
     
            this._conn.query({
                sql: query,
                values: data
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(rows.affectedRows);
                }
            });
        })
    }

    create(data: Array<any>) {
        return new Promise((resolve, reject) => {
            this._conn = this._db.connection();

            // create query
            let query = 'Insert into ' + this._tableName+ ' set ?'

            this._conn.query({
                sql: query,
                values: [data]
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(rows.affectedRows);
                }
            });
        })
    }

    delete(data: Array<any>) {
        return new Promise( async (resolve, reject) => {
            this._conn = this._db.connection();

            var query = '';
            // delete query
            await this.setFileldList()
                .then(() => {
                    query = 'Delete from ' + this._tableName+ ' Where ';
                    for (let i = 0; i < this._keyList.length; i++) {
                        if (i > 1) {
                            query = query + ' and '
                        }
                        
                        query = query + this._keyList[i] + ' = ?';    
                    }
                });
            
            this._conn.query({
                sql: query,
                values: data
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(rows.affectedRows);
                }
            });
        })
    }
}

export default CRUDModel;