export { Produto };

class Produto {
  readonly nome;
  readonly cor;
  readonly tamanho;
  public quantidade;
  public preco;
  readonly img;
  readonly productId;

  constructor(nome, cor, tamanho, quantidade, preco, img, productId) {
    this.nome = nome;
    this.cor = cor;
    this.tamanho = tamanho;
    this.quantidade = quantidade;
    this.preco = preco;
    this.img = img;
    this.productId = productId;
  }

  get getPreco() {
    return this.preco;
  }
}
