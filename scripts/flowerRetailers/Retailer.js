export const Retailer = (retailerObject, distributorObject) => {
    return `<section>
        <div>Retailer: ${retailerObject.name}</div>
        <div>City: ${retailerObject.city}</div>
        <div>State: ${retailerObject.state}</div>
        <div>Address: ${retailerObject.address}</div>
        <div>Distributor: ${distributorObject.name}</div>
    </section>`
}