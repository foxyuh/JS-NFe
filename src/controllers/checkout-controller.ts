import { Entrega } from "../models/entrega.js";
import { PedidoLog } from "../models/pedido-log.js";
import { MetodoDeEntrega } from "../models/metodo-de-entrega.js";
import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";
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

    pedidoLog = new PedidoLog();
    produtos = new Produtos()
    valorEntrega = '20,10';
    metodoDeEntrega = []


    constructor() {
        this.init();
    };

    init () {

        this.produtos.adiciona(new Produto(
            'Playstation 5', 
            'Preto/Branco', 
            '30cm', 
            1, 
            '4.399,90', 
            '../src/assets/imgs/ps5.png', 
            500
            ), this.produtos)

            this.produtos.adiciona(new Produto(
                'Pulse 3D', 
                'Preto/Branco', 
                '15cm', 
                2, 
                '479,90', 
                '../src/assets/imgs/pulse3d.png', 
                437
                ), this.produtos)

                // console.log(this.produtos)
        this.atualizaInformacoes(this.valorEntrega, this.produtos)
    };

    adiciona() {

        document.querySelector('.entrega').classList.add('display-none')
        document.querySelector('.pagamento').classList.remove('display-none')

        const entrega = new Entrega(this.email, this.nome, this.sobrenome, this.endereço, this.endereço2, this.complemento, this.codigoPostal, this.telefone, this.cidade, this.estado);
        this.pegaMetodoDeEntrega();
        const metodoDeEntrega = new MetodoDeEntrega(this.metodoDeEntrega);

        this.pedidoLog.adiciona(entrega, metodoDeEntrega);
    };

    pegaMetodoDeEntrega() {

        document.querySelectorAll('.td').forEach(element => {
    
            element.childNodes.forEach(element => {

                const elemento: any = element;
                if ( element.nodeName == 'INPUT' ) {
                    if ( elemento.checked ) {
                        const elementoParent: HTMLElement = elemento.parentNode.parentNode;
                        const tipoDeEntrega: any = elementoParent.querySelector('.p-tipo-de-entrega');
                        const dias: any = elementoParent.querySelector('.dias');
                        const valor: any = elementoParent.querySelector('.number');
    
                        this.metodoDeEntrega = [tipoDeEntrega.innerText, dias.innerText, valor.innerText];
                    };
                };
            });
        });
    };

    atualizaInformacoes(envio, produtos, codigo=0) {

        EventEmitter.emit('Exibe-Produtos', produtos)
        EventEmitter.emit('Info-Itens', produtos)
        EventEmitter.emit('Info-Envio', envio)
        EventEmitter.emit('Info-Total', [envio, produtos, codigo])

    }


};