import { EventEmitter } from "../utils/event-emitter.js";
import { ProdutosView } from "../views/produtos-view.js";

const produtosView = new ProdutosView("#lista-de-produtos");

EventEmitter.on("Exibe-Produtos", (model) => {
  produtosView.update(model);
});
