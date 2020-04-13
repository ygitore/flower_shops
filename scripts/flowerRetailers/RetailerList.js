import {Retailer} from './Retailer.js'
import {useRetailers} from './RetailerProvider.js'
import { useDistributors } from '../flowerDistributors/DistributorProvider.js'
import { useNurseriesDistributors } from "../nurseriesDistributors/NurseriesDistributors.js";
import { useNurseries } from '../nurseries/NurseryProvider.js';
import { useNurseriesFlowers } from '../nurseriesFlowers/NurseryFlowerProvider.js';
import { useFlowers } from '../flowers/FlowerProvider.js';

const contentTarget =  document.querySelector(".retailer_container")

const render = (retailerObject) => {
    const distributors = useDistributors()
    const nurseriesDistributors = useNurseriesDistributors()
    const nurseries = useNurseries()
    const flowers = useFlowers()
    const nurseriesFlowers = useNurseriesFlowers()
    contentTarget.innerHTML = retailerObject.map(retailer =>{
        
        // find the related distributor object for current retailer
        const foundDistributor = distributors.find(distributor =>{
            return distributor.id === retailer.distributorId
        })
       // filter out all nurseries object matching nurseriesDistributors object
        const nurseryDistributor = nurseriesDistributors.filter(
            (nurseryDistr) => {
                return nurseryDistr.distributorId === foundDistributor.id
        })
        // iterate each nurseryDistributor object to find the only
        // nurserId matching  nurseries object
        const foundNursery = nurseryDistributor.map(nurseryDistr => {
            const nursery = nurseries.find(
                nurs => {
                    return nurs.id === nurseryDistr.nurseryId
                }
            )
            return nursery
        })
        // filter all nurseriesFLowers object and find corresponding 
        // nursery object if id in nurseryobject matching with nurseryId in 
        // corresponding nurseriesFlowers object 
        const nurseryFlowerRel = nurseriesFlowers.filter(
            nf => {
                const nursery = foundNursery.find(
                    nurs => {
                        return nurs.id === nf.nurseryId
                    }
                )
                return nursery
            }
        )
        // map over each nurseryFlower object and find 
        // corresponding flower object if id in flowers
        // is matching with flowerId in nurseriesFlowers 
        //object
        const allFlowers = nurseryFlowerRel.map(
            fn => {
                const flwr = flowers.find(fl => fl.id === fn.flowerId)
                return flwr
            }
        )
        
        return Retailer(retailer, foundDistributor,foundNursery, allFlowers)
        }).join("")
}
export const RetailerList = () => {
    const retailers = useRetailers()
    render(retailers)
}