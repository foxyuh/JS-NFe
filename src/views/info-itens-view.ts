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

getMoney( str ) {
        return parseInt( str.replace(/[\D]+/g,'') );
}

formatReal( int ) {
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
}

};