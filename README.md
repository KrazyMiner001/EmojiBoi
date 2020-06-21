[![Discord Bots](https://top.gg/api/widget/718471280914858015.svg)](https://top.gg/bot/718471280914858015)

# EmojiBoi

## First Time setup

### Edit the .env with as thses as the params:
1. token is your discord bot token
2. mongodb is your mongoDB database(for prefix managment)
3. cckey is your key for cloudconvert V2 API(not implemented yet but will be for enlarging unicode emojis)

### do ALL these commands in the directory of the main files.

install dependencies:
`npm install`

install typescript, ts-node and ts-node-dev:
`npm i -g typescript ts-node ts-node-dev`


## run the bot:
### in development mode(aka when u edit file not restarts and is not so performant)
`ts-node-dev index.ts`
### in release mode(bot does not restart and is probably more performant)
`ts-node index.ts`

