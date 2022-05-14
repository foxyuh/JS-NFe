import { Produtos } from "../models/produtos.js";
import { Convert } from "../utils/convert.js";
import { View } from "./view.js";

export { ProdutosView };

class ProdutosView extends View<Produtos> {
    
protected template(model: Produtos): string {
    return `
    ${model.getProdutos.map(element => {
        const inputQuantidade: HTMLInputElement = document.querySelector('#input-quantidade')

        return `
        <li class="produto-selecionado">
            <img src="${element.img}" class="img-produto" alt="imagem do produto">
            <div>
                <p class="item-info item-info-nome">${element.nome}</p>
                <p class="item-info item-info-cor">Cor: ${element.cor}</p>
                <p class="item-info item-info-tamanho">Tamanho: ${element.tamanho}</p>
                <p class="item-info item-info-quantidade">Quantidade: 
                <input type="number" name="quantidade" id="input-quantidade" value="${element.quantidade}" min="1" max="99" maxlength="99" style="width: 30px;" disabled></p>
                <p class="item-info item-info-valor">
                ${
                    (element.quantidade * Convert.realToDolar(element.preco))
                    .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                }
                </p>
            </div>
        </li>
        `
    })}
    `;
};

};