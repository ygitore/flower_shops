import { FlowerList } from "./flowers/FLowerList.js";
import { getFlowers } from "./flowers/FlowerProvider.js";

getFlowers().then(FlowerList)