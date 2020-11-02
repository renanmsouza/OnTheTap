import CRUDModel from '../../Components/CRUDModel';

class Ingrediente extends CRUDModel {
    constructor(tableName: String) {
        super(tableName, undefined);
    }
}

export default Ingrediente;