
const { Command } = require('discord-akairo');
const config = require('../../config.json')
var guildConf = require('../../storages/guildConf.json');
const fs = require('fs');
import * as Discord from 'discord.js'
class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
            aliases: ['prefix', 'pf'],
            description: {
                text: 'Changes the prefix, can only be used every 30 minutes',
                usage: `prefix [new prefix]`
            },
            cooldown: 1800000,
            ratelimit: 1,
            args: [
                {
                    id: "newprefix",
                    default: null,
                },
            ],
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['ADMINISTRATOR'],
        });
    }

    async exec(message: Discord.Message, args: any) {
        message.channel.send(`Updating...`)

        await this.client.settings.set(message.guild!.id, 'prefix', args.prefix);

        const _ = new Discord.MessageEmbed()
            .setTitle("Done! 👍")
            .setDescription(
                `
                The new prefix is \`${args.prefix}\`
                Keep note that he bot restarts on change, until https://github.com/discord-akairo/discord-akairo/pull/125 gets merged it'll be like this.
                `

            )
            .setColor(`#00FF00`);
        return message.channel.send(_);



    }
}
module.exports = PrefixCommand;