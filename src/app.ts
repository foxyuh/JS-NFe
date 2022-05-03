import { EventEmitter } from "./utils/event-emitter.js";
import { CheckoutController } from "./controllers/checkout-controller.js";

const checkoutController = new CheckoutController();

document.querySelector('#continuar').addEventListener('click', function () {
    checkoutController.adiciona();
});

document.querySelector('.tabela').addEventListener('change', function (event) {

    const evento: any = event.target;

    if (evento.name == 'radio-tabela' && evento.checked) {
        const parent = evento.parentNode.parentNode;
        const envio = parent.querySelector('.number').innerText;
        const produtos = checkoutController.produtos
        checkoutController.atualizaInformacoes(envio, produtos);
        // console.log(valor)
        console.log([envio, produtos])
    };

});