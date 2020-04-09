export const Retailer = (retailerObject) => {
    return `<section>
        <div>${retailerObject.name}</div>
        <div>${retailerObject.city}</div>
        <div>${retailerObject.state}</div>
        <div>${retailerObject.address}</div>
    </section>`
}