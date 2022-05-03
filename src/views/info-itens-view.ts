import { Produtos } from "../models/produtos.js";
import { View } from "./view.js";

export { InfoItensView };

class InfoItensView extends View<Produtos> {
    
protected template(model: Produtos): string {
    return `
        ${model}
    `;
};

};