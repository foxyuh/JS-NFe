import { Convert } from "../utils/convert.js";
import { EventEmitter } from "../utils/event-emitter.js";
import { InfoEnvioView } from "../views/info-envio-view.js";

const infoEnvioView = new InfoEnvioView('#info-envio');

EventEmitter.on('Info-Envio', model => {
    const valorConvertido = Convert.realToDolar(model)
    const envio = valorConvertido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    infoEnvioView.update(envio)
})