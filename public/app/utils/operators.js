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
        // else Promise.reject('A quantidade de requisições foi excedido.')
        // ==========
        // Exibir o erro takeUntil usando models de view 
    }

}

export const debounceTime = (milliseconds, fn) => {
    let timer = 0;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, milliseconds);
    };
};

export const delay = time => data =>
    new Promise((resolve, reject) => 
    setTimeout(() => resolve(data), time)
) 

export const retry = (retries, time, fn) => {
    return fn()
    .catch(err =>
        {
            console.log(retries)
            return delay(time)().then(() => 
            retries > 1 ? retry(--retries, time, fn) : Promise.reject('Não foi possível obter conexão'))
        }
    )
}