import { EventEmitter } from "./utils/event-emitter.js";
import { CheckoutController } from "./controllers/checkout-controller.js";


const checkoutController = new CheckoutController();

document.querySelector('#continuar').addEventListener('click', function () {
    checkoutController.adiciona();
});

document.querySelector('.tabela').addEventListener('change', function (event) {
    const evento: any = event.target
})

document.querySelector('.tabela').addEventListener('change', function (event) {

    const evento: any = event.target;

    if (evento.name == 'radio-tabela' && evento.checked) {
        const parent = evento.parentNode.parentNode;
        const envio = parent.querySelector('.number').innerText;
        const produtos = checkoutController.produtos
        checkoutController.atualizaInformacoes(envio, produtos);
        styleEvent()
        console.log([envio, produtos])
    };

    function styleEvent() {
        document
        .querySelectorAll('.tr-tbody')
        .forEach(element => 
            element.classList.remove('tr-activate')
        );
    
        if (evento.name == 'radio-tabela' && evento.checked) {
            const parent = evento.parentNode.parentNode
            parent.classList.add('tr-activate')
        }
    }

});

