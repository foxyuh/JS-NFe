export { Produtos };

class Produtos {

    private readonly produtos = [];

    adiciona(produto): void {

        this.produtos.push(produto);

    };

get getProdutos() {
    const produtos = [...this.produtos];
    return produtos;
};

};