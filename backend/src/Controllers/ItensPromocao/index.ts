import CRUDController from '../../Components/CRUDController';
import ModelItensPromocao from '../../Models/ItensPromocao';

class ItensPromocao extends CRUDController {
    constructor() {
        super(new ModelItensPromocao('ItensPromocao'));
    }
}

export default ItensPromocao;