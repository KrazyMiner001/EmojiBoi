
const tslib_1 = require("tslib");

const { AkairoClient, CommandHandler } = require('discord-akairo');
const MongooseProvider = require('akairo-mongoose');
const mongoose = require('mongoose');
const config = require("./config.json");
var guildConf = require("./storages/guildConf.json");
const fs = require("fs");
import * as Discord from "discord.js";
const model = require("./models/Prefixes");
class MyClient extends AkairoClient {
    constructor() {
        super({}, {});
        this.settings = new MongooseProvider(model);
        /* ... */

        this.commandHandler = new CommandHandler(this, {
            directory: "./commands/",
            prefix: (message: any) => {
                if (message.guild) {
                    // The third param is the default.
                    return this.settings.get(message.guild.id, 'prefix', 'e.');
                }
                return config.token;
            },
            defaultCooldown: 1000,
        });

        this.commandHandler.loadAll();


    };
    async login(token: any) {
        await this.settings.init();
        console.log(token);

        return super.login(token);
    }
}




const client = new MyClient();
mongoose
    .connect('mongodb+srv://TNTMan:MongoDB69420@emojibotprefixes-narhy.gcp.mongodb.net/prefixes?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('✅ Connected to database');
        const client = new MyClient();
        client.login(config.token);
    })
    .catch((err: any) => console.log(err));

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("e.help");
});
client.on("guildCreate", (guild: Discord.Guild) => { // If the Bot was added on a server, proceed
    if (!guildConf[guild.id]) { // If the guild's id is not on the GUILDCONF File, proceed
        guildConf[guild.id] = {
            prefix: config.prefix,
        };
    }
    fs.writeFile(
        "./storages/guildConf.json",
        JSON.stringify(guildConf, null, 2),
        (err: any) => {
            if (err) console.log(err);
        },
    );
});
client.on("guildDelete", (guild: any) => { // If the Bot was removed on a server, proceed
    delete guildConf[guild.id]; // Deletes the Guild ID and Prefix
    fs.writeFile(
        "./storages/guildConf.json",
        JSON.stringify(guildConf, null, 2),
        (err: any) => {
            if (err) console.log(err);
        },
    );
});
