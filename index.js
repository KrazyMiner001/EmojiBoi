const tslib_1 = require("tslib");
const Akairo = require("discord-akairo");
const config = require('./config.json');
var guildConf = require('./storages/guildConf.json');
const db = require('./db')
class MyClient extends Akairo.AkairoClient {
    constructor() {
        super({}, {});
        this.commandHandler = new Akairo.CommandHandler(this, {
            directory: './commands/',
            prefix: (message) => {
                return guildConf[message.guild.id].prefix;
            },
        });
        this.commandHandler.loadAll();
    }
}
const client = new MyClient();
client.login(config.token);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("e.help");
});
client.on('guildCreate', (guild) => { // If the Bot was added on a server, proceed
    if (!guildConf[guild.id]) { // If the guild's id is not on the GUILDCONF File, proceed
        guildConf[guild.id] = {
            prefix: config.prefix
        }
    }
    fs.writeFile('./storages/guildConf.json', JSON.stringify(guildConf, null, 2), (err) => {
        if (err) console.log(err)
    })
});
client.on('guildDelete', (guild) => { // If the Bot was removed on a server, proceed
    delete guildConf[guild.id]; // Deletes the Guild ID and Prefix
    fs.writeFile('./storages/guildConf.json', JSON.stringify(guildConf, null, 2), (err) => {
        if (err) console.log(err)
    })
});
