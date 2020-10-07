const CRUDController = require('../../components/CRUDController');

class Comanda extends CRUDController {
    constructor() {
        super('Comanda', 'Comanda');
    }
}

module.exports = Comanda;