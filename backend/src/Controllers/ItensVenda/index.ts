import CRUDController from '../../Components/CRUDController';
import ModelItensVenda from '../../Models/ItensVenda';

class ItensVenda extends CRUDController {
    constructor() {
        super(new ModelItensVenda('ItensVenda'));
    }
}

export default ItensVenda;