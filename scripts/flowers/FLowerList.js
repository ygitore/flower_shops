
import { Flower } from "./Flower.js";
import {useFlowers} from './FlowerProvider.js'

const contentTarget = document.querySelector(".flower-container")

const render = (flowerToDisplay) => {
    contentTarget.innerHTML = flowerToDisplay.map(flower => Flower(flower)).join("")
}
export const FlowerList = () => {
    const flowers = useFlowers()
    render(flowers)
}
