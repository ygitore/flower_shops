let nurseries = []

export const useNurseries = () => nurseries.slice()

export const getNurseries = () => {
    return fetch("http://localhost:8088/nurseries")
    .then(response => response.json())
    .then(data => nurseries = data)
}