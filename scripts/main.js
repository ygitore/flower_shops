import { getRetailers } from "./flowerRetailers/RetailerProvider.js";
import { RetailerList } from "./flowerRetailers/RetailerList.js";
import { getDistributors } from "./flowerDistributors/DistributorProvider.js";
import { getNurseriesDistributors } from "./nurseriesDistributors/NurseriesDistributors.js";
import { getNurseries } from "./nurseries/NurseryProvider.js";

getRetailers()
.then(getDistributors)
.then(getNurseries)
.then(getNurseriesDistributors)
.then(RetailerList)