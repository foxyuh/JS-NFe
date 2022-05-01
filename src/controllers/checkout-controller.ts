import { Entrega } from "../models/entrega.js";
import { Informacoes } from "../models/informacoes.js";
import { MetodoDeEntrega } from "../models/metodo-de-entrega.js";

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

    constructor() {
        this.init();
    };

    init () {

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


};