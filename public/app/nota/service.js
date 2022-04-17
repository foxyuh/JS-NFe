import { log, handleStatus } from '../utils/promise-helpers.js';
import { partialize, compose, pipe } from '../utils/operators.js';

const API = 'http://localhost:3000/notasx'

const getItemsFromNotas = notas => notas.flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo == code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

export const notasService = {

    listAll() {

        return fetch(API)
        .then(handleStatus)
        .catch(err => Promise.reject(err))
    },

    sumItems(code) {

        const filterItems = partialize(filterItemsByCode, code); // filterItemsByCode.bind(null, code)
        const sumItems = pipe(getItemsFromNotas, filterItems, sumItemsValue); // compose(sumItemsValue, filterItems, getItemsFromNotas);

        return this.listAll()
        .then(sumItems)
        .catch(err => Promise.reject(err)) //'Não foi possível fazer a soma dos valores.'
    }
};

/*
const sumItems = code => notas => notas
    .flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0)
*/
