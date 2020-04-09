import { FlowerList } from "./flowers/FLowerList.js";
import { getFlowers } from "./flowers/FlowerProvider.js";
import { getRetailers } from "./flowerRetailers/RetailerProvider.js";
import { RetailerList } from "./flowerRetailers/RetailerList.js";
import { getDistributors } from "./flowerDistributors/DistributorProvider.js";


getFlowers()
    .then(FlowerList)
getRetailers()
    .then(getDistributors)
    .then(RetailerList)