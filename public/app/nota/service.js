import { log, handleStatus } from '../utils/promise-helpers.js';
import { partialize, compose, pipe } from '../utils/operators.js';
import { Maybe } from '../utils/maybe.js'

const API = 'http://localhost:3000/notas'

const getItemsFromNotas = notasM => 
notasM.map(notas => 
    notas.flatMap(nota => 
        nota.itens)
);

const filterItemsByCode = (code, itemsM) => 
itemsM.map(items => 
    items.filter(item => 
        item.codigo == code)
);

const sumItemsValue = itemsM => 
itemsM.map(items => 
    items.reduce((total, item) => 
    total + item.valor, 0)
);

export const notasService = {

    listAll() {

        return fetch(API)
        .then(handleStatus)
        .then(res => Maybe.of(res))
        .catch(err => Promise.reject(err))
    },

    sumItems(code) {

        const filterItems = partialize(filterItemsByCode, code); // filterItemsByCode.bind(null, code)
        const sumItems = pipe (
            getItemsFromNotas, 
            filterItems, 
            sumItemsValue
        );
        // compose(sumItemsValue, filterItems, getItemsFromNotas);

        return this.listAll()
        .then(sumItems)
        .then(res => res.getOrElse(0))
         // 'Não foi possível fazer a soma dos valores.'
    }
};

/*
const sumItems = code => notas => notas
    .flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0)
*/
