import { log } from './utils/promise-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';

const operations = pipe (
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
)

document
.querySelector('#myButton')
.onclick = operations;

/*
const action = debounceTime(500, takeUntil(3, () =>
        service
        .sumItems('2143')
        .then(console.log)
        .catch(console.log)
    )
);

const operation1 = takeUntil(3, () =>
service
.sumItems('2143')
.then(console.log)
.catch(console.log)
)

const operation2 = debounceTime(500, operation1);
*/

/*
document
.querySelector('#myButton')
.onclick = () =>
service
.sumItems('2143')
.then(notas => console.log(notas))
.catch(console.log); // caso dê erro na soma
*/
