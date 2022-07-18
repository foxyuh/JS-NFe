import { View } from "./view.js";

export { InfoTotalView };

class InfoTotalView extends View<String> {
  protected template(model: string): string {
    return `
        <small class="info-moeda">(BRL)</small>
        ${model}
    `;
  }
}
