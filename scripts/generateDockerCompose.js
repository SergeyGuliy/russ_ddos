import fs from 'fs';

import { DDOS_TARGETS } from '../constants/DDOS_TARGETS.js'
import { generateContainerItem } from './generateContainerItem.js'

const dockerComposeHeader = '' +
    'version: "3"\n' +
    '\n' +
    'services:'

let arrayOfStrings = [dockerComposeHeader]

DDOS_TARGETS.forEach((target) => {
    arrayOfStrings.push(generateContainerItem(target))
})

const readyFile = arrayOfStrings.join('')

fs.writeFile(
    'docker-compose.yml',
    readyFile,
    (e) => {
        if (e) { throw e }
    }
)
