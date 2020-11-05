import { Application } from 'express';
import { AdicionaisCategoria } from './Entities/AdicionaisCategoria';
import { Categoria } from './Entities/Categoria';
import { Comanda } from './Entities/Comanda';
import { FormaPagto } from './Entities/FormaPagto';
import { HistoricoMovimento } from './Entities/HistoricoMovimento';
import { HorariosPromocao } from './Entities/HorariosPromocao';
import { Ingrediente } from './Entities/Ingrediente';
import { ItensComanda } from './Entities/ItensComanda';
import { ItensPromocao } from './Entities/ItensPromocao';
import { ItensVenda } from './Entities/ItensVenda';
import { MovimentosCaixa } from './Entities/MovimentosCaixa';
import { PagamentosVenda } from './Entities/PagamentosVenda';
import { Produto } from './Entities/Produto';
import { Promocao } from './Entities/Promocao';
import { ResumoCaixa } from './Entities/ResumoCaixa';
import { UnidadeMedida } from './Entities/UnidadeMedida';
import { Usuario } from './Entities/Usuario';
import { Venda } from './Entities/Venda';

export function Routes(app: Application) {
    AdicionaisCategoria(app);
    Categoria(app);
    Comanda(app);
    FormaPagto(app);
    HistoricoMovimento(app);
    HorariosPromocao(app);
    Ingrediente(app);
    ItensComanda(app);
    ItensPromocao(app);
    ItensVenda(app);
    MovimentosCaixa(app);
    PagamentosVenda(app);
    Produto(app);
    Promocao(app);
    ResumoCaixa(app);
    UnidadeMedida(app);
    Usuario(app);
    Venda(app);

    // Home
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'Hello World!' });    
    })
}