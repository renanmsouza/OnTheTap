const CRUDController = require('../../components/CRUDController');

class Produto extends CRUDController {
    constructor() {
        super('Produto', 'Produto');
    }
}

module.exports = Produto;