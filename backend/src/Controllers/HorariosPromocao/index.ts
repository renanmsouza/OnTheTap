import CRUDController from '../../Components/CRUDController';
import ModelHorariosPromocao from '../../Models/HorariosPromocao';

class HorariosPromocao extends CRUDController {
    constructor() {
        super(new ModelHorariosPromocao('HorariosPromocao'));
    }
}

export default HorariosPromocao;