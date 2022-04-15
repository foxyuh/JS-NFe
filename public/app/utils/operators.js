export const partialize = (fn, ...params) => 
    fn.bind(null, ...params);

export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) =>
        fn(previousValue), value);

export const pipe = (...fns) => value =>
    fns.reduce((previousValue, fn) =>
        fn(previousValue), value);

export const takeUntil = (times, fn) => {

    return () => { 
        if (times-- > 0) fn()
        //else Promise.reject('A quantidade de requisições foi excedido.')
    }

}

export const debounceTime = (milliseconds, fn) => {
    let timer = 0;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, milliseconds);
    };
};