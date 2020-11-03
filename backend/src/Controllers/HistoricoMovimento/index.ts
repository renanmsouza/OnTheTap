import CRUDController from '../../Components/CRUDController';
import ModelHistoricoMovimento from '../../Models/HistoricoMovimento';

class HistoricoMovimento extends CRUDController {
    constructor() {
        super(new ModelHistoricoMovimento('HistoricoMovimento'));
    }
}

export default HistoricoMovimento;