const Database = require('../../Database');

class CRUDModel {
    // #Private   
    // _Protected
        _conn;    
        _tableName;
        _keyList;
        _fieldList;
    // Public

    constructor(tableName) {
        this._tableName = tableName;
        this._keyList = [];
        this._fieldList = [];

        this._conn = Database.connection();
    }

    free() {
        this._conn.end();
    }

    // Define os campos da Tabela
    setFileldList() {
        return new Promise((resolve, reject) => {
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

    list() {
        return new Promise((resolve, reject) => {
            // list query
            let query = 'Select * from '+this._tableName;

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

    get(data) {
        return new Promise(async (resolve, reject) => {
            var query = '';
            // get query
            await this.setFileldList()
                .then(() => {
                    query = 'Select * from '+this._tableName+' Where '
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

    set(data) {
        return new Promise(async (resolve, reject) => {
            var query = '';
            // set query
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

    post(data) {
        return new Promise((resolve, reject) => {
            // post query
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

    del(data) {
        return new Promise(async (resolve, reject) => {
            var query = '';
            //del query
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

module.exports = CRUDModel;