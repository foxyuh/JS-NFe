import { log } from './utils/promise-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';

const somarValores = () => // somarValores -> faz a requisição API e soma os valores pela função sumItems() que nela deve ser
service                    // indicado o código dos objetos a serem somados no retorno da API
.sumItems('2143')
.then(console.log)
.catch(console.log)

const operations = pipe ( // pipe -> método para encadear funções em cima de uma única função
    partialize(debounceTime, 500), // debouceTime -> feature de delay durante tentativas na hora e emitir
    partialize(takeUntil, 3) // takeUntil -> feature que indica a quantidade de tentativas permitida
)(somarValores)

const action = // outra forma mais padrão de aplicar o propósito da aplicação logo a cima 
    debounceTime(500, 
        takeUntil(3,
        somarValores))

document
.querySelector('#myButton')
.onclick = operations;
