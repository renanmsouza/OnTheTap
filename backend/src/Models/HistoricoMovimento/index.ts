import CRUDModel from '../../Components/CRUDModel';

class HistoricoMovimento extends CRUDModel {
    constructor(tableName: String) {
        super(tableName, undefined);
    }
}

export default HistoricoMovimento;