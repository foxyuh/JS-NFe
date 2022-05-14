import { Convert } from "../utils/convert.js";
import { EventEmitter } from "../utils/event-emitter.js";
import { InfoTotalView } from "../views/info-total-view.js";

const infoTotalView = new InfoTotalView('#info-total');

EventEmitter.on('Info-Total', value => {


    const envio = Convert.realToDolar(value[0])
    const produtos = value[1]
    
    const somaDosPrecos = produtos.getProdutos.reduce((valorAcumulado, numeroAtual) => {
        
        const valor = numeroAtual.quantidade * Convert.realToDolar(numeroAtual.preco)
        valorAcumulado = valorAcumulado + valor
        return valorAcumulado
    }, 0)

    const total = envio + somaDosPrecos
    infoTotalView.update(total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
    
})