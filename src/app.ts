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
        checkoutController.atualizaMetodoDeEntrega(envio);
        // console.log(valor)
        const produtos = checkoutController.produtos
        console.log([envio, produtos])
        EventEmitter.emit('SomarTotal', [envio, produtos])
        // checkoutController.atualizaTotal(valor)
    };

});