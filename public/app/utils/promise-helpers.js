export const log = itens => {
    console.log(itens)
    return itens
}
export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.statusText)

export const timeoutPromise = (time, promise) => {

    const timeoutPromise = new Promise((resolve, reject) => 
    setTimeout(() => 
    reject(`Limite de tempo excedido (Tempo: ${time}ms)`) , time ))

    return Promise.race([
            timeoutPromise, 
            promise
        ])
}