"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_2 = require("tslib");
const Discord = tslib_2.__importStar(require("discord.js"));
const Akairo = tslib_2.__importStar(require("discord-akairo"));
class PrefixCommand extends Akairo.Command {
    constructor() {
        super('prefix', {
            aliases: ['prefix', 'pf'],
            category: 'utils',
            description: {
                text: 'Changes the prefix',
                usage: `prefix [new prefix]`
            },
            ratelimit: 1,
            args: [
                {
                    id: "prefix",
                    default: null,
                },
            ],
            clientPermissions: ['SEND_MESSAGES'],
            userPermissions: ['ADMINISTRATOR'],
        });
    }
    async exec(message, args) {
        message.channel.send(`Updating...`);
        // @ts-ignore
        await this.client.settings.set(message.guild.id, 'prefix', args.prefix);
        const _ = new Discord.MessageEmbed()
            .setTitle("Done! 👍")
            .setDescription(`
                The new prefix is \`${args.prefix}\`
                `)
            .setColor(`#00FF00`);
        return message.channel.send(_);
    }
}
module.exports = PrefixCommand;
