let nurseriesFlowers = []

export const useNurseriesFlowers = () => nurseriesFlowers.slice()

export const getNurseriesFlowers = () => fetch("http://localhost:8088/nurseriesFlowers")
    .then(response => response.json())
    .then(data => nurseriesFlowers = data)

