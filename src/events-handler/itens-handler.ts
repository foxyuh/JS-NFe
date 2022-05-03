import { Convert } from "../utils/convert.js";
import { EventEmitter } from "../utils/event-emitter.js";
import { InfoItensView } from "../views/info-itens-view.js";

const infoItensView = new InfoItensView('#info-itens');

EventEmitter.on('Info-Itens', model => { 

    const modelo = model.getProdutos.reduce((valorAcumulado, numeroAtual) => {
        const valor = Convert.realToDolar(numeroAtual.preco)
        valorAcumulado = valorAcumulado + valor
        return valorAcumulado
    }, 0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    function realToDolar(num){
        num = num.replace('.', '');
        num = num.replace(',', '.');
        return Number(num)
    }

    infoItensView.update(modelo) 
})
