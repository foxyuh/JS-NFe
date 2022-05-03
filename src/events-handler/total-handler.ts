
import { EventEmitter } from "../utils/event-emitter.js";
import { InfoTotalView } from "../views/info-total-view.js";

const infoTotalView = new InfoTotalView('#info-total')

EventEmitter.on('SomarTotal', value => {


    const envio = realToDolar(value[0])
    const produtos = value[1]
    
    const somaDosPrecos = produtos.getProdutos.reduce((valorAcumulado, numeroAtual) => {
        const valor = realToDolar(numeroAtual.preco)
        valorAcumulado = valorAcumulado + valor
        return valorAcumulado
    }, 0)

    function realToDolar(num){
        num = num.replace('.', '');
        num = num.replace(',', '.');
        return Number(num)
    }

    // Desacoplar realToDolar e colocar em utils

    const total = envio + somaDosPrecos
    console.log(total)
    infoTotalView.update(total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
    
})