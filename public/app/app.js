import { notasService as service } from './nota/service.js';
import { log, timeoutPromise } from './utils/promise-helpers.js';
import { takeUntil, debounceTime, partialize, pipe, retry, compose} from './utils/operators.js';


// somarValores -> faz a requisição API e soma os valores pela função sumItems() que nela deve ser
// indicado o código dos objetos a serem somados no retorno da API

// '2143'

/*
Notas: O erro trazido pelo takeUntil deve ser TRATADO, para novas requisições poderem serem feitas
*/


const operations = compose ( // compose\pipe -> método para encadear funções em cima de uma única função
    partialize(debounceTime, 500), // debouceTime -> feature de delay durante tentativas na hora e emitir
    partialize(takeUntil, 3) // takeUntil -> feature que indica a quantidade de tentativas permitida
);

const sumOperations = pipe (
    partialize(retry, 5, 3000),
    partialize(timeoutPromise, 200)
);

const somarValores = code => operations(() => 
sumOperations(() => service.sumItems(code))
.then(console.log)
.catch(console.log)
);

document
.querySelector('#myButton')
.onclick = somarValores('2143');

/*
const sum = code => service.sumItems(code)
const timeout = (time, sum) => timeoutPromise(time, sum)

const sumOperations = code => compose (
    partialize(retry, 5, 3000)
)(() => timeout(200, sum(code)))

const somarValores = () => 
sumOperations('2143')
.then(console.log)
.catch(console.log)

const operations = compose ( // compose\pipe -> método para encadear funções em cima de uma única função
    partialize(debounceTime, 500), // debouceTime -> feature de delay durante tentativas na hora e emitir
    partialize(takeUntil, 3) // takeUntil -> feature que indica a quantidade de tentativas permitida
)(somarValores)

const action = // outra forma mais padrão de aplicar o propósito da aplicação logo a cima 
    debounceTime(500, 
        takeUntil(3,
            somarValores))

=======

const operations = compose ( // compose\pipe -> método para encadear funções em cima de uma única função
    partialize(debounceTime, 500), // debouceTime -> feature de delay durante tentativas na hora e emitir
    partialize(takeUntil, 3) // takeUntil -> feature que indica a quantidade de tentativas permitida
);

const sumOperations = pipe (
    partialize(retry, 5, 3000),
    partialize(timeoutPromise, 200)
);

const somarValores = code => operations(() => 
sumOperations(() => service.sumItems(code))
.then(console.log)
.catch(console.log)
);

const action = // outra forma mais padrão de aplicar o propósito da aplicação logo a cima 
    debounceTime(500, 
        takeUntil(3,
            somarValores))
*/
