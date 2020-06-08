
import * as Akario from 'discord-akairo'
import * as Discord from 'discord.js'
const config = require('../../config.json')
var guildConf = require('../../storages/guildConf.json');
class PingCommand extends Akario.Command {
    constructor() {
        super('help', {
            aliases: ['h', 'help'],
            args: [
                {
                    id: 'commandname',
                    type: 'command'
                }
            ],
            description: {
                text: 'Displays this message',
                usage: `e.help`
            },

        });
    }

    exec(message: Discord.Message, args: any) {


        message.channel.send(`Helping...`).then(() => {
            if (!args.commandname) {
                const _ = new Discord.MessageEmbed()
                    .setTitle("Here's your help!")
                    .setDescription(
                        ``
                    )

                    .setColor(`#00FF00`);
                this.handler.modules
                    .each(command => _.setDescription(_.description + `\`${guildConf[message.guild!.id].prefix}${command.description.usage}\` - ${command.description.text} - aliases: ${command.aliases.join(', ')}\n\n`));
                message.channel.send(_);
            } else {
                const _ = new Discord.MessageEmbed()
                    .setTitle("Here's your help!")
                    .setDescription(
                        `${args.commandname.name}`
                    )

                    .setColor(`#00FF00`);
                message.channel.send(_);
            }

        })


    }
}

module.exports = PingCommand;