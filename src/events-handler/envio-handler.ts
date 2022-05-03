import { EventEmitter } from "../utils/event-emitter.js";
import { InfoEnvioView } from "../views/info-envio-view.js";

const infoEnvioView = new InfoEnvioView('#info-envio');

EventEmitter.on('Info-Envio', model => { infoEnvioView.update(model) })