import CRUDController from '../../Components/CRUDController';
import ModelAdicionaisCategoria from '../../Models/AdicionaisCategoria';

class AdicionaisCategoria extends CRUDController {
    constructor() {
        super(new ModelAdicionaisCategoria('AdicionaisCategoria'));
    }
}

export default AdicionaisCategoria;