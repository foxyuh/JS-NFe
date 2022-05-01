import { CheckoutController } from "./controllers/checkout-controller.js";

const checkoutController = new CheckoutController();

document.querySelector('#continuar').addEventListener('click', function () {
    checkoutController.adiciona();
});