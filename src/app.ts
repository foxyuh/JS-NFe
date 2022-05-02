import { CheckoutController } from "./controllers/checkout-controller.js";

const checkoutController = new CheckoutController();

document.querySelector('#continuar').addEventListener('click', function () {
    checkoutController.adiciona();
});

document.querySelector('.tabela').addEventListener('change', function (event) {

    const evento: any = event.target;

    if (evento.name == 'radio-tabela' && evento.checked) {
        const parent = evento.parentNode.parentNode;
        const valor = parent.querySelector('.number').innerText;
        checkoutController.atualizaMetodoDeEntrega(valor);
        console.log(valor)
        // checkoutController.atualizaTotal(valor)
    };

});