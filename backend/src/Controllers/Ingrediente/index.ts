import CRUDController from '../../Components/CRUDController';
import ModelIngrediente from '../../Models/Ingrediente';

class Ingrediente extends CRUDController {
    constructor() {
        super(new ModelIngrediente('Ingrediente'));
    }
}

export default Ingrediente;