import CRUDModel from '../../Components/CRUDModel';

class MovimentosCaixa extends CRUDModel {
    constructor(tableName: String) {
        super(tableName, undefined);
    }
}

export default MovimentosCaixa;