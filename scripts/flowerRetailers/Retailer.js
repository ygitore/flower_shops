export const Retailer = (retailerObject, distributorObject,nursery, allFlowers) => {
    return `<section>
        <div>Retailer: ${retailerObject.name}</div>
        <div>City: ${retailerObject.city}</div>
        <div>State: ${retailerObject.state}</div>
        <div>Address: ${retailerObject.address}</div>
        <div>Distributor: ${distributorObject.name}</div>
        <div>Nursery:
            ${nursery.map(nur => `<li>${nur.name}
            <ul>
                available flowers:-
                    ${
                        allFlowers.map(flower => `<li>${flower.commonName}</li>`).join("")
                    }
                </ul>
            </li>`).join("")}
        </div>
        
    </section>`
}