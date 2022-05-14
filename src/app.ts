import { EventEmitter } from "./utils/event-emitter.js";
import { CheckoutController } from "./controllers/checkout-controller.js";

const checkoutController = new CheckoutController();

const $ = document.querySelector.bind(document)
const $All = document.querySelectorAll.bind(document)

$('.select').addEventListener('change', function(event) {

    const valorPromocional = this.value 

    checkoutController.atualizaInformacoes(
        checkoutController.valorEntrega, 
        checkoutController.produtos, 
        valorPromocional)

})

let steps = 1;

$All('.form').forEach(element =>
    element.addEventListener('submit', function (event) {
    window.scrollTo(0, 0);
    event.preventDefault();
    checkoutController.adiciona();
    steps = 2;
}));

$('.tabela').addEventListener('change', function (event) {

    const evento: any = event.target;

    if (evento.name == 'radio-tabela' && evento.checked) {
        const parent = evento.parentNode.parentNode;
        const envio = parent.querySelector('.number').innerText;
        const produtos = checkoutController.produtos
        
        console.log(checkoutController.valorEntrega = envio)
        console.log(envio, produtos)
        checkoutController.atualizaInformacoes(envio, produtos);
        styleEvent()
    };

    function styleEvent() {
        $All('.tr-tbody')
        .forEach(element => 
            element.classList.remove('tr-activate')
        );
    
        if (evento.name == 'radio-tabela' && evento.checked) {
            const parent = evento.parentNode.parentNode
            parent.classList.add('tr-activate')
        }
    }

});

