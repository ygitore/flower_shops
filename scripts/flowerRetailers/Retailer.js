export const Retailer = (retailerObject, distributorObject, nurseryDistributorObject) => {
    return `<section>
        <div>Retailer: ${retailerObject.name}</div>
        <div>City: ${retailerObject.city}</div>
        <div>State: ${retailerObject.state}</div>
        <div>Address: ${retailerObject.address}</div>
        <div>Distributor: ${distributorObject.name}</div>
        <div>Source:<ul>
                ${
                    nurseryDistributorObject.map(farmer => {
                        return `<li>${farmer.name}</li>`
                    }).join("")
                }
            </ul>
        </div>
    </section>`
}