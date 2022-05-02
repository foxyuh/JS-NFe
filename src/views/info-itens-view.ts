import { Produtos } from "../models/produtos.js";
import { View } from "./view.js";

export { InfoItensView };

class InfoItensView extends View<Produtos> {
    
protected template(model: Produtos): string {
    return `
        ${model.getProdutos.reduce((valorAcumulado, numeroAtual) => {
            const valor = this.realToDolar(numeroAtual.preco)
            valorAcumulado = valorAcumulado + valor
            return valorAcumulado
        }, 0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
    `;
};

realToDolar(num){
    num = num.replace('.', '');
    num = num.replace(',', '.');
    return Number(num)
}

protected others(): void {
    
}

};