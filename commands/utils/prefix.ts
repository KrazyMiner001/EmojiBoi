
const { Command } = require('discord-akairo');
import * as Discord from 'discord.js'
class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
            aliases: ['prefix', 'pf'],
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
                `

            )
            .setColor(`#00FF00`);
        return message.channel.send(_);



    }
}
module.exports = PrefixCommand;