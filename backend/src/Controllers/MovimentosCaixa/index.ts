import CRUDController from '../../Components/CRUDController';
import ModelMovimentosCaixa from '../../Models/MovimentosCaixa';

class MovimentosCaixa extends CRUDController {
    constructor() {
        super(new ModelMovimentosCaixa('MovimentosCaixa'));
    }
}

export default MovimentosCaixa;