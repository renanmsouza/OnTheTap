import { Application } from 'express';
import { Categoria } from './Entities/Categoria';
import { Comanda } from './Entities/Comanda';
import { FormaPagto } from './Entities/FormaPagto';
import { Ingrediente } from './Entities/Ingrediente';
import { ItensComanda } from './Entities/ItensComanda';
import { ItensVenda } from './Entities/ItensVenda';
import { PagamentosVenda } from './Entities/PagamentosVenda';
import { Produto } from './Entities/Produto';
import { UnidadeMedida } from './Entities/UnidadeMedida';
import { Usuario } from './Entities/Usuario';
import { Venda } from './Entities/Venda';

export function Routes(app: Application) {
    Categoria(app);
    Comanda(app);
    FormaPagto(app);
    Ingrediente(app);
    ItensComanda(app);
    ItensVenda(app);
    PagamentosVenda(app);
    Produto(app);
    UnidadeMedida(app);
    Usuario(app);
    Venda(app);

    // Home
    app.get('/', (req, res) => res.status(200).json({ message: 'Hello World!' }));
}