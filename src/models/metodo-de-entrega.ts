export { MetodoDeEntrega };

class MetodoDeEntrega {

    private metodoDeEntrega;
    private tempoEstimado;
    private custo;

    constructor(array) {
        console.log(array[0], array[1], array[2])
        this.metodoDeEntrega = array[0];
        this.tempoEstimado = array[1];
        this.custo = array[2];
    };

};