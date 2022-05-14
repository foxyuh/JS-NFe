

export { Produtos };


class Produtos {
    
    produtos = [];

    adiciona(produto, produtos: any): void {

        this.findOrderByProductId(produto, produtos)

    };

    findOrderByProductId(produto, ArrayDeProdutos) {
        const produtos: any = ArrayDeProdutos.getProdutos
        const productId = produto.productId
        if(!produtos.find(order => order.productId === productId)) {
            this.produtos.push(produto);
        } else {
            this.produtos.splice(produto)
            // idéia futura: tratar erro de quando tentão adicionar o mesmo produto, fazer um aviso na tela e avisando que o usúario pode adicionar uma quantidade diretamente no produto da lista.
        }
        
    }

get getProdutos() {
    const produtos = this.produtos
    return produtos;
};

};