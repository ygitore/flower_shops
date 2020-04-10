import {Retailer} from './Retailer.js'
import {useRetailers} from './RetailerProvider.js'
import { useDistributors } from '../flowerDistributors/DistributorProvider.js'
import { useNurseriesDistributors } from "../nurseriesDistributors/NurseriesDistributors.js";
import { useNurseries } from '../nurseries/NurseryProvider.js';

const contentTarget =  document.querySelector(".retailer_container")

const render = (retailerObject) => {
    const distributors = useDistributors()
    const nurseriesDistributors = useNurseriesDistributors()
    const nurseries = useNurseries()

    contentTarget.innerHTML = retailerObject.map(retailer =>{
        //find the related distributor for current retailer
        const foundDistributor = distributors.find(distributor =>{
            return distributor.id === retailer.distributorId
        })
        // those matching nurseries to distributor
        const nurseryDistributor = nurseriesDistributors.filter(
            (nursery) => {
                return nursery.distributorId === foundDistributor.id
        })
        //for each relationship, convert to corresponding nursery object
        const foundNursery = nurseryDistributor.map(farmer =>{
            const nursery = nurseries.find(nursery =>nursery.id === farmer.nurseryId)
            return nursery
        })
        return Retailer(retailer, foundDistributor, foundNursery)
        }).join("")
}
export const RetailerList = () => {
    const retailers = useRetailers()
    render(retailers)
}