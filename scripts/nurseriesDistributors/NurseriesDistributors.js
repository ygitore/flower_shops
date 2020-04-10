
let nurseriesDistributors = []

export const useNurseriesDistributors = () => nurseriesDistributors.slice()

export const getNurseriesDistributors = () => fetch("http://localhost:8088/nurseriesDistributors")
    .then(response => response.json())
    .then(data => nurseriesDistributors = data)