import { getRetailers } from "./flowerRetailers/RetailerProvider.js";
import { RetailerList } from "./flowerRetailers/RetailerList.js";
import { getDistributors } from "./flowerDistributors/DistributorProvider.js";
import { getNurseriesDistributors } from "./nurseriesDistributors/NurseriesDistributors.js";
import { getNurseries } from "./nurseries/NurseryProvider.js";
import { getNurseriesFlowers } from "./nurseriesFlowers/NurseryFlowerProvider.js";
import { getFlowers } from "./flowers/FlowerProvider.js";

getRetailers()
.then(getDistributors)
.then(getNurseries)
.then(getNurseriesDistributors)
.then(getNurseriesFlowers)
.then(getFlowers)
.then(RetailerList)