export { MetodoDeEntrega };

class MetodoDeEntrega {
  private metodoDeEntrega;
  private tempoEstimado;
  private custo;

  constructor(array) {
    const info = [...array];
    // console.log(info[0], info[1], info[2])
    this.metodoDeEntrega = info[0];
    this.tempoEstimado = info[1];
    this.custo = info[2];
  }
}
