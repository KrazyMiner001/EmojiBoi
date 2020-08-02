"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_2 = require("tslib");
const { Command } = require('discord-akairo');
const Discord = tslib_2.__importStar(require("discord.js"));
class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'p'],
            category: 'info',
            description: {
                text: 'Gets the ping for the bot',
                usage: `ping`
            },
            clientPermissions: ['SEND_MESSAGES'],
            userPermissions: ['SEND_MESSAGES'],
        });
    }
    exec(message) {
        message.channel.send(`Pinging...`).then((msg) => {
            const _ = new Discord.MessageEmbed()
                .setTitle("Pong!")
                .setDescription(`Pong!\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}`)
                .setColor(`#0000FF`);
            msg.edit(_);
            msg.edit("\u200B");
        });
    }
}
module.exports = PingCommand;
