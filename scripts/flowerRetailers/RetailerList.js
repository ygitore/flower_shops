import {Retailer} from './Retailer.js'
import {useRetailers} from './RetailerProvider.js'

const contentTarget =  document.querySelector(".retailer_container")

const render = (retailerObject) => {
    contentTarget.innerHTML = retailerObject.map(retailer =>Retailer(retailer)).join("")
}
export const RetailerList = () => {
    const retailers = useRetailers()
    render(retailers)
}