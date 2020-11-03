CREATE TABLE UnidadeMedida (
  idUnidadeMedida INTEGER NOT NULL AUTO_INCREMENT,
  Descricao VARCHAR(200) NULL,
  Abreviacao VARCHAR(10) NULL,
  PRIMARY KEY(idUnidadeMedida)
);

CREATE TABLE Usuario (
  idUsuario INTEGER NOT NULL AUTO_INCREMENT,
  Nome VARCHAR(200) NULL,
  Usuario VARCHAR(100) NULL,
  Senha VARCHAR(200) NULL,
  Administrador BOOL NULL,
  Caixa BOOL NULL,
  Garcom BOOL NULL,
  PRIMARY KEY(idUsuario)
);

CREATE TABLE Promocao (
  idPromocao INTEGER NOT NULL AUTO_INCREMENT,
  Descricao VARCHAR(200) NULL,
  DataCriacao DATE NULL,
  Ativa BOOL NULL,
  Obs VARCHAR(250) NULL,
  PRIMARY KEY(idPromocao)
);

CREATE TABLE ResumoCaixa (
  idResumoCaixa INTEGER NOT NULL AUTO_INCREMENT,
  Data DATE NULL,
  Obs VARCHAR(250) NULL,
  PRIMARY KEY(idResumoCaixa)
);

CREATE TABLE HistoricoMovimento (
  idHistoricoMovimento INTEGER NOT NULL AUTO_INCREMENT,
  Descricao VARCHAR(200) NULL,
  PRIMARY KEY(idHistoricoMovimento)
);

CREATE TABLE Categoria (
  idCategoria INTEGER NOT NULL AUTO_INCREMENT,
  Descricao VARCHAR(200) NULL,
  Cardapio BOOL NULL,
  PRIMARY KEY(idCategoria)
);

CREATE TABLE Venda (
  idVenda INTEGER NOT NULL AUTO_INCREMENT,
  Data DATE NULL,
  DiaSemana INTEGER NULL,
  Obs VARCHAR(250) NULL,
  Desconto NUMERIC(17,2) NULL,
  TotalItens NUMERIC(17,2) NULL,
  TotalVenda NUMERIC(17,2) NULL,
  TotalPago NUMERIC(17,2) NULL,
  Troco NUMERIC(17,2) NULL,
  PRIMARY KEY(idVenda)
);

CREATE TABLE Comanda (
  idComanda INTEGER NOT NULL AUTO_INCREMENT,
  Descricao VARCHAR(200) NULL,
  Hash VARCHAR(10) NULL,
  Data DATETIME NULL,
  Obs VARCHAR(250) NULL,
  Status VARCHAR(1) NULL,
  TotalComanda NUMERIC(17,2) NULL,
  PRIMARY KEY(idComanda)
);

CREATE TABLE FormaPagto (
  idFormaPagto INTEGER NOT NULL AUTO_INCREMENT,
  Descricao VARCHAR(200) NULL,
  Efetivacao INTEGER NULL,
  PRIMARY KEY(idFormaPagto)
);

CREATE TABLE Produto (
  idProduto INTEGER NOT NULL AUTO_INCREMENT,
  idCategoria INTEGER NOT NULL,
  Codigo VARCHAR(100) NULL,
  EAN VARCHAR(200) NULL,
  Descricao VARCHAR(250) NULL,
  Imagem VARCHAR(250) NULL,
  Ingrediente BOOL NULL,
  ProdutoFinal BOOL NULL,
  ValorVenda NUMERIC(15,2) NULL,
  PRIMARY KEY(idProduto),
  UNIQUE INDEX Produto_Codigo(Codigo),
  UNIQUE INDEX Produto_EAN(EAN),
  INDEX FK_idCategoria(idCategoria),
  FOREIGN KEY(idCategoria)
    REFERENCES Categoria(idCategoria)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE HorariosPromocao (
  idHorario INTEGER NOT NULL AUTO_INCREMENT,
  idPromocao INTEGER NOT NULL,
  HoraInicio TIME NULL,
  HoraFim TIME NULL,
  DiasDaSemana VARCHAR(50) NULL,
  PRIMARY KEY(idHorario, idPromocao),
  INDEX FK_idPromocao(idPromocao),
  FOREIGN KEY(idPromocao)
    REFERENCES Promocao(idPromocao)
      ON DELETE CASCADE
      ON UPDATE NO ACTION
);

CREATE TABLE PagamentosVenda (
  idPagamento INTEGER NOT NULL AUTO_INCREMENT,
  idVenda INTEGER NOT NULL,
  idFormaPagto INTEGER NOT NULL,
  ValorPago NUMERIC(17,2) NULL,
  DataEfetivacao DATE NULL,
  PRIMARY KEY(idPagamento, idVenda),
  INDEX FK_idFormaPagto(idFormaPagto),
  INDEX FK_idVenda(idVenda),
  FOREIGN KEY(idFormaPagto)
    REFERENCES FormaPagto(idFormaPagto)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(idVenda)
    REFERENCES Venda(idVenda)
      ON DELETE CASCADE
      ON UPDATE NO ACTION
);

CREATE TABLE ItensComanda (
  idComanda INTEGER NOT NULL,
  idProduto INTEGER NOT NULL,
  Qtde NUMERIC(17,2) NULL,
  ValorUnitario NUMERIC(17,2) NULL,
  Promocao BOOL NULL,
  ValorPromocional NUMERIC(17,2) NULL,
  ValorTotal NUMERIC(17,2) NULL,
  PRIMARY KEY(idComanda, idProduto),
  INDEX FK_idComanda(idComanda),
  INDEX FK_idProduto(idProduto),
  FOREIGN KEY(idComanda)
    REFERENCES Comanda(idComanda)
      ON DELETE CASCADE
      ON UPDATE NO ACTION,
  FOREIGN KEY(idProduto)
    REFERENCES Produto(idProduto)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE AdicionaisCategoria (
  idCategoria INTEGER NOT NULL,
  idProduto INTEGER NOT NULL,
  PRIMARY KEY(idCategoria, idProduto),
  INDEX FK_Categoria(idCategoria),
  INDEX FK_Produto(idProduto),
  FOREIGN KEY(idCategoria)
    REFERENCES Categoria(idCategoria)
      ON DELETE CASCADE
      ON UPDATE NO ACTION,
  FOREIGN KEY(idProduto)
    REFERENCES Produto(idProduto)
      ON DELETE CASCADE
      ON UPDATE NO ACTION
);

CREATE TABLE ItensPromocao (
  idItensPromocao INTEGER NOT NULL AUTO_INCREMENT,
  idPromocao INTEGER NOT NULL,
  idProduto INTEGER NOT NULL,
  ValorPromocional NUMERIC(17,2) NULL,
  PRIMARY KEY(idItensPromocao, idPromocao),
  INDEX FK_idPromocao(idPromocao),
  INDEX FK_idProduto(idProduto),
  FOREIGN KEY(idPromocao)
    REFERENCES Promocao(idPromocao)
      ON DELETE CASCADE
      ON UPDATE NO ACTION,
  FOREIGN KEY(idProduto)
    REFERENCES Produto(idProduto)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE MovimentosCaixa (
  idMovimento INTEGER NOT NULL AUTO_INCREMENT,
  idResumoCaixa INTEGER NOT NULL,
  HistoricoMovimento INTEGER NOT NULL,
  Qtde INTEGER NULL,
  ValorMedio NUMERIC(17,2) NULL,
  ValorTotal NUMERIC(17,2) NULL,
  PRIMARY KEY(idMovimento, idResumoCaixa),
  INDEX FK_idResumoCaixa(idResumoCaixa),
  FOREIGN KEY(idResumoCaixa)
    REFERENCES ResumoCaixa(idResumoCaixa)
      ON DELETE CASCADE
      ON UPDATE NO ACTION,
  FOREIGN KEY(HistoricoMovimento)
    REFERENCES HistoricoMovimento(idHistoricoMovimento)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE ItensVenda (
  idVenda INTEGER NOT NULL,
  idProduto INTEGER NOT NULL,
  Qtde NUMERIC(17,2) NULL,
  ValorUnitario NUMERIC(17,2) NULL,
  Promocao BOOL NULL,
  ValorPromocional NUMERIC(17,2) NULL,
  Desconto NUMERIC(17,2) NULL,
  Total NUMERIC(17,2) NULL,
  PRIMARY KEY(idVenda, idProduto),
  INDEX FK_idVenda(idVenda),
  INDEX FK_idProduto(idProduto),
  FOREIGN KEY(idVenda)
    REFERENCES Venda(idVenda)
      ON DELETE CASCADE
      ON UPDATE NO ACTION,
  FOREIGN KEY(idProduto)
    REFERENCES Produto(idProduto)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE Ingrediente (
  idProduto INTEGER NOT NULL,
  idIngrediente INTEGER NOT NULL,
  idUnidadeMedida INTEGER NOT NULL,
  Quantidade NUMERIC(17,2) NULL,
  PRIMARY KEY(idProduto, idIngrediente),
  INDEX FK_idProduto(idProduto),
  INDEX FK_idIngrediente(idIngrediente),
  INDEX FK_idUnidadeMedida(idUnidadeMedida),
  FOREIGN KEY(idProduto)
    REFERENCES Produto(idProduto)
      ON DELETE CASCADE
      ON UPDATE NO ACTION,
  FOREIGN KEY(idIngrediente)
    REFERENCES Produto(idProduto)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(idUnidadeMedida)
    REFERENCES UnidadeMedida(idUnidadeMedida)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

