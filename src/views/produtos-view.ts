import { Produtos } from "../models/produtos.js";
import { View } from "./view.js";

export { ProdutosView };

class ProdutosView extends View<Produtos> {
    
protected template(model: Produtos): string {
    return `
    ${model.getProdutos.map(element => {
        return `
        <li class="produto-selecionado">
            <img src="${element.img}" class="img-produto" alt="imagem do produto">
            <div>
                <p class="item-info item-info-nome">${element.nome}</p>
                <p class="item-info item-info-cor">Cor: ${element.cor}</p>
                <p class="item-info item-info-tamanho">Tamanho: ${element.tamanho}</p>
                <p class="item-info item-info-quantidade">Quantidade: ${element.quantidade}</p>
                <p class="item-info item-info-valor">R$${element.preco}</p>
            </div>
        </li>
        `
    })}
    `;
};

};