const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping']
        });
    }

    exec(message) {
        message.channel.send(`Pinging...`).then(msg => {
            const _ = new MessageEmbed()
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