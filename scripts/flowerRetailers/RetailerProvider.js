
let retailers = []

export const useRetailers = () => retailers.slice()

export const getRetailers = () => {
    return fetch("http://localhost:8088/retailers")
    .then(res => res.json())
    .then(parsedRetailers => retailers = parsedRetailers)
}