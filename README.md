#Russ DDos

### Requirments
`Node (v17.6.0)`
`Docker Docker Compoose`
`avaliability to run bash scripts`

### Scripts
`npm run service:generate` - generate docker-compose.yml. Based on request which will return still working target sites.

`npm run service:start` - start attack

`npm run service:forceKill` - stop attack, and clean all images

`npm run service:genStart` - generate new docker-compose.yml and start attack

`npm run startRestartServise` - restart DDos every 5 minutes

### Setup list of targets
`./constants/DDOS_TARGETS.js` file with list of targets

`./constants/DEFAULT_VALUES.js` ddos basic values
