import CRUDController from '../../Components/CRUDController';
import ModelUnidadeMedida from '../../Models/UnidadeMedida';

class UnidadeMedida extends CRUDController {
    constructor() {
        super(new ModelUnidadeMedida('UnidadeMedida'));
    }
}

export default UnidadeMedida;