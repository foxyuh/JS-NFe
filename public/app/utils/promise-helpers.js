export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.statusText)

export const log = itens => {
    console.log(itens)
    return itens
}