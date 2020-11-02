import CRUDModel from '../../Components/CRUDModel';

class Categoria extends CRUDModel {
    constructor(tableName: String) {
        super(tableName, undefined);
    }
}

export default Categoria;