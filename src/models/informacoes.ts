export { Informacoes };

class Informacoes {

    informacoes = [];

    adiciona(entrega, metodoDeEntrega) {

        this.informacoes.push(entrega, metodoDeEntrega);

        console.log(this.informacoes);
    };

};