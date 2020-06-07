
const { Command } = require('discord-akairo');
const config = require('../../config.json')
var guildConf = require('../../storages/guildConf.json');
const fs = require('fs');
import * as Discord from 'discord.js'
class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
            aliases: ['prefix'],
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

    exec(message: Discord.Message, args: any) {
        message.channel.send(`Updating...`)
        guildConf[message.guild!.id].prefix = args.newprefix;
        if (!guildConf[message.guild!.id].prefix) {
            guildConf[message.guild!.id].prefix = config.prefix; // If you didn't specify a Prefix, set the Prefix to the Default Prefix
        };
        const _ = new Discord.MessageEmbed()
            .setTitle("Done! 👍")
            .setDescription(
                `
                The new prefix is \`${guildConf[message.guild!.id].prefix}\`
                Keep note that he bot restarts on change, until https://github.com/discord-akairo/discord-akairo/pull/125 gets merged it'll be like this.
                `

            )
            .setColor(`#00FF00`);
        message.channel.send(_);
        fs.writeFile('./storages/guildConf.json', JSON.stringify(guildConf, null, 2), (err: any) => {
            if (err) console.log(err)
        })


    }
}
module.exports = PrefixCommand;