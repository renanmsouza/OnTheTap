const CRUDModel = require('../../components/CRUDModel');

class Comanda extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = Comanda;