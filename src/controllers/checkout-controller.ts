import { Entrega } from "../models/entrega.js";
import { Informacoes } from "../models/informacoes.js";
import { MetodoDeEntrega } from "../models/metodo-de-entrega.js";
import { InfoItensView } from "../views/info-itens-view.js";
import { InfoEnvioView } from "../views/info-envio-view.js";
import { InfoTotalView } from "../views/info-total-view.js";
import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";
import { ProdutosView } from "../views/produtos-view.js";
import { EventEmitter } from "../utils/event-emitter.js";

export { CheckoutController };

class CheckoutController {

    $ = document.querySelector.bind(document)
    email = this.$('#email')
    nome = this.$('#nome')
    sobrenome = this.$('#sobrenome')
    endereço = this.$('#endereco')
    endereço2 = this.$('#endereco2')
    complemento = this.$('#complemento')
    codigoPostal = this.$('#codigo-postal')
    telefone = this.$('#telefone')
    cidade = this.$('#cidade')
    estado = this.$('#estado')

    metodoDeEntrega = []
    informacoes = new Informacoes();

    produtos = new Produtos()


    constructor() {

        this.init();
    };

    init () {
        const produto = new Produto('Playstation 5', 'Preto/Branco', '30cm', '1', '4.399,90', 'assets/imgs/ps5.png');
        this.produtos.adiciona(produto)
        this.produtos.adiciona(produto)
        this.produtos.adiciona(produto)

        this.atualizaInformacoes('20,10', this.produtos)
        //

        // this.produtosView.update(this.produtos)
        // this.infoItensView.update(this.produtos)
        // this.atualizaMetodoDeEntrega('20,10') // Valor Inicial do Envio
        console.log(this.produtos.getProdutos)
        // this.infoTotalView.update(this.produtos)
        // this.infoItensView.update('4.423,00')
        // this.infoEnvioView.update('33,00')
        // this.infoTotalView.update('4.423,00')

        //R$4.399,90
        //R$23,10
        //R$4.423,00
    };

    adiciona() {
        const entrega = new Entrega(this.email, this.nome, this.sobrenome, this.endereço, this.endereço2, this.complemento, this.codigoPostal, this.telefone, this.cidade, this.estado);
        this.pegaMetodoDeEntrega();
        const metodoDeEntrega = new MetodoDeEntrega(this.metodoDeEntrega);

        this.informacoes.adiciona(entrega, metodoDeEntrega);
    };

    pegaMetodoDeEntrega() {
        document.querySelectorAll('.td').forEach(element => {
    
            element.childNodes.forEach(element => {

                const elemento: any = element;
                if ( element.nodeName == 'INPUT' ) {
                    if ( elemento.checked ) {
                        const elementoParent: HTMLElement = elemento.parentNode.parentNode;
                        const tipoDeEntrega: any = elementoParent.querySelector('.p-tipo-de-entrega');
                        const dias: any = elementoParent.querySelector('.td-dias');
                        const valor: any = elementoParent.querySelector('.td-valor');
    
                        this.metodoDeEntrega = [tipoDeEntrega.innerText, dias.innerText, valor.innerText];
                    };
                };
            });
        });
    };

    atualizaInformacoes(envio, produtos) {

        EventEmitter.emit('Exibe-Produtos', produtos)
        EventEmitter.emit('Info-Itens', produtos)
        EventEmitter.emit('Info-Envio', envio)
        EventEmitter.emit('Info-Total', [envio, produtos])

    }

};