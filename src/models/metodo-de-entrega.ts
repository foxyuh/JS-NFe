export { MetodoDeEntrega };

class MetodoDeEntrega {

    private metodoDeEntrega;
    private tempoEstimado;
    private custo;

    constructor(array) {

        this.metodoDeEntrega = array[0];
        this.tempoEstimado = array[1];
        this.custo = array[2];
    };

};