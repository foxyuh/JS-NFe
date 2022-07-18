import { Convert } from "../utils/convert.js";
import { EventEmitter } from "../utils/event-emitter.js";
import { InfoTotalView } from "../views/info-total-view.js";

const infoTotalView = new InfoTotalView("#info-total");

EventEmitter.on("Info-Total", (value) => {
  const valorEnvio = Convert.realToDolar(value[0]);
  const produtos = value[1];
  const valorPromocional = Convert.realToDolar(String(value[2]));

  const somaDosPrecos = produtos.getProdutos.reduce(
    (valorAcumulado, numeroAtual) => {
      const valor =
        numeroAtual.quantidade * Convert.realToDolar(numeroAtual.preco);
      valorAcumulado = valorAcumulado + valor;
      return valorAcumulado;
    },
    0
  );

  const total = valorEnvio + (somaDosPrecos - valorPromocional);
  infoTotalView.update(
    total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  );
});
