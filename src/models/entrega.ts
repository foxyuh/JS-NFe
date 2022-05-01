export { Entrega };

class Entrega {

    private entrega;
    private email;
    private nome;
    private sobrenome;
    private endereco;
    private endereco2;
    private complemento;
    private codigoPostal;
    private telefone;
    private cidade;
    private estado;


    constructor(email, nome, sobrenome, endereco, endereco2, complemento, codigoPostal, telefone, cidade, estado) {

        this.email = email.value;
        this.nome = nome.value;
        this.sobrenome = sobrenome.value;
        this.endereco = endereco.value;
        this.endereco2 = endereco2.value;
        this.complemento = complemento.value;
        this.codigoPostal = codigoPostal.value;
        this.telefone = telefone.value;
        this.cidade = cidade.value;
        this.estado = estado.value;
    };

};