const CRUDController = require('../../components/CRUDController');

class Venda extends CRUDController {
    constructor() {
        super('Venda', 'Venda');
    }
}

module.exports = Venda;