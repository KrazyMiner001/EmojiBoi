const { Command } = require('discord-akairo');
import * as Discord from 'discord.js'
class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'p'], description: {
                text: 'Gets the ping for the bot',
                usage: `ping`
            },
            clientPermissions: ['SEND_MESSAGES'],
            userPermissions: ['SEND_MESSAGES'],
        });
    }

    exec(message: Discord.Message) {
        message.channel.send(`Pinging...`).then((msg: Discord.Message) => {
            const _ = new Discord.MessageEmbed()
                .setTitle("Pong!")
                .setDescription(
                    `Pong!\nLatency is ${Math.floor(
                        msg.createdTimestamp - message.createdTimestamp
                    )}`
                )
                .setColor(`#0000FF`);
            msg.edit(_);
            msg.edit("\u200B");
        })
    }
}

module.exports = PingCommand;