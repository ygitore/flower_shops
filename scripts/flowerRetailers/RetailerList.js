import {Retailer} from './Retailer.js'
import {useRetailers} from './RetailerProvider.js'
import { useDistributors } from '../flowerDistributors/DistributorProvider.js'

const contentTarget =  document.querySelector(".retailer_container")

const render = (retailerObject) => {
    const distributors = useDistributors()
    contentTarget.innerHTML = retailerObject.map(retailer =>
        {
            const flowerDistributor = distributors.find(distributor => retailer.distributorId === distributor.id)
            return Retailer(retailer, flowerDistributor)
        }).join("")
}
export const RetailerList = () => {
    const retailers = useRetailers()
    render(retailers)
}