import CRUDController from '../../Components/CRUDController';
import ModelItensComanda from '../../Models/ItensComanda';

class ItensComanda extends CRUDController {
    constructor() {
        super(new ModelItensComanda('ItensComanda'));
    }
}

export default ItensComanda;