function getName(name) {
    if (name.includes('http://')) {
        return name.split('http://')[1].split('/')[0] || name
    } else if (name.includes('https://')) {
        return name.split('https://')[1].split('/')[0] || name
    }
}

export function generateContainerItem (item) {
    let link, name
    let duration = process.env.DDOS_DEFAULT_DURATION
    let connections = process.env.DDOS_DEFAULT_CONNECTIONS
    if (typeof item === "string") {
        link = item;
        name = getName(item);
    } else if (typeof item === "object" && item.link) {
        link = item.link;
        name = getName(item.link);
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