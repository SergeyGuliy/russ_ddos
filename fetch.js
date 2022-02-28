import axios from "axios";

export function fetchTargets() {
    return axios.get('https://ddosmonitor.herokuapp.com/global/api/sites')
        .then((resp) => {
            const notSameLinks = []

            const online = resp.data.filter(i => i.online)
            let justLinks = online.map(i => i.url)
            justLinks = justLinks.map(link => {
                if (link.includes('http://')) {
                    return link.split('http://')[1]
                } else if (link.includes('https://')) {
                    return link.split('https://')[1]
                }
            })
            justLinks = justLinks.map(link => link.split('/')[0])

            justLinks.forEach(link => {
                if (!notSameLinks.includes(justLinks)) notSameLinks.push(link)
            })

            return notSameLinks
        })
        .catch(e => console.log(e))
}
