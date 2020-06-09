
const tslib_1 = require("tslib");
const dotenv = require('dotenv');
dotenv.config();
const { AkairoClient, CommandHandler } = require('discord-akairo');
const MongooseProvider = require('akairo-mongoose');
const mongoose = require('mongoose');
const config = require("./config.json");
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
                return 'e.';
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
        client.login(process.env.token);
    })
    .catch((err: any) => console.log(err));

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("e.help");
});

