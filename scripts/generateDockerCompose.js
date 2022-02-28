import { DDOS_TARGETS } from '../constants/DDOS_TARGETS'

const dockerComposeHeader = '' +
    'version: "3"\n' +
    '\n' +
    'services:'

let arrayOfStrings = [dockerComposeHeader]


DDOS_TARGETS.forEach((target) => {
    console.log(target)
})

console.log(dockerComposeHeader)