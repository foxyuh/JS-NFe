export { PedidoLog };

class PedidoLog {

    log = [];

    adiciona(entrega, metodoDeEntrega) {

        this.log.push(entrega, metodoDeEntrega);

        console.log(this.log);
    };

};