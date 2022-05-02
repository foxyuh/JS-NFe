import { View } from "./view.js";

export { InfoItensView };

class InfoItensView extends View<String> {
    
protected template(model: string): string {
    return `
        R$${model}
    `;
};

};