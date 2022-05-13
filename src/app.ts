import { EventEmitter } from "./utils/event-emitter.js";
import { CheckoutController } from "./controllers/checkout-controller.js";


const checkoutController = new CheckoutController();

let steps = 1;

document.querySelectorAll('.form').forEach(element =>
    element.addEventListener('submit', function (event) {
    window.scrollTo(0, 0);
    event.preventDefault();
    checkoutController.adiciona();
    steps = 2;
}));

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

