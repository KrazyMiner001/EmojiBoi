
import * as Discord from 'discord.js'
import * as Akairo from 'discord-akairo';
class PrefixCommand extends Akairo.Command {
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
            clientPermissions: ['SEND_MESSAGES'],
            userPermissions: ['ADMINISTRATOR'],
        });
    }

    async exec(message: Discord.Message, args: any) {
        message.channel.send(`Updating...`)
        // @ts-ignore
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