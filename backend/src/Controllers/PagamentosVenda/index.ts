import CRUDController from '../../Components/CRUDController';
import ModelPagamentosVenda from '../../Models/PagamentosVenda';

class PagamentosVenda extends CRUDController {
    constructor() {
        super(new ModelPagamentosVenda('PagamentosVenda'));
    }
}

export default PagamentosVenda;