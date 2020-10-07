const CRUDModel = require('../../components/CRUDModel');

class Venda extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = Venda;