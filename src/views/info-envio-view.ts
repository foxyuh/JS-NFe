import { View } from "./view.js";

export { InfoEnvioView };

class InfoEnvioView extends View<String> {
    

protected template(model: string): string {
    return `
        R$${model}
    `;
};

};