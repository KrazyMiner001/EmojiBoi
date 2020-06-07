
const { Command } = require('discord-akairo');
const config = require('../../config.json')
var guildConf = require('../../storages/guildConf.json');
class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
            aliases: ['prefix'],
            args: [
                {
                    id: "newprefix",
                    default: null,
                },
            ]
        });
    }

    exec(message, args) {
        message.channel.send(`Updating...`)
        guildConf[message.guild.id].prefix = args.newprefix;
        if (!guildConf[message.guild.id].prefix) {
            guildConf[message.guild.id].prefix = config.prefix; // If you didn't specify a Prefix, set the Prefix to the Default Prefix
        };

        const _ = new MessageEmbed()
            .setTitle("Done! 👍")
            .setDescription(
                `
                The new prefix is \`${guildConf[message.guild.id].prefix}\`
                `

            )
            .setColor(`#00FF00`);
        channel.message.send(_);
    }
}
module.exports = PrefixCommand;