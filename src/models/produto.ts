export { Produto }

class Produto {

    readonly nome;
    readonly cor;
    readonly tamanho;
    readonly quantidade;
    readonly preco;
    readonly img;

    constructor(nome, cor, tamanho, quantidade, preco, img) {
        this.nome = nome
        this.cor = cor
        this.tamanho = tamanho
        this.quantidade = quantidade
        this.preco = preco
        this.img = img
    }

}