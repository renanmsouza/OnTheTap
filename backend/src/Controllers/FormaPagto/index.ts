import CRUDController from '../../Components/CRUDController';
import ModelFormaPagto from '../../Models/FormaPagto';

class FormaPagto extends CRUDController {
    constructor() {
        super(new ModelFormaPagto('FormaPagto'));
    }
}

export default FormaPagto;