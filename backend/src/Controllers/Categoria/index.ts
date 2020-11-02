import CRUDController from '../../Components/CRUDController';
import ModelCategoria from '../../Models/Categoria';

class Categoria extends CRUDController {
    constructor() {
        super(new ModelCategoria('Categoria'));
    }
}

export default Categoria;