"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_2 = require("tslib");
const { Command } = require('discord-akairo');
const Discord = tslib_2.__importStar(require("discord.js"));
class CreateEmojiCommand extends Command {
    constructor() {
        super('emojis', {
            aliases: ['emojis', 'hm'],
            category: 'emojis',
            description: {
                text: 'Gets all the emojis on the server and displays them',
                usage: `emojis`
            },
            clientPermissions: ['MANAGE_EMOJIS'],
            userPermissions: ['SEND_MESSAGES'],
        });
    }
    exec(message) {
        let Emojis = "";
        let EmojisAnimated = "";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
        function Emoji(id) {
            return message.client.emojis.cache.get(id).toString();
        }
        message.guild.emojis.cache.forEach((emoji) => {
            OverallEmojis++;
            if (emoji.animated) {
                Animated++;
                EmojisAnimated += Emoji(emoji.id);
            }
            else {
                EmojiCount++;
                Emojis += Emoji(emoji.id);
            }
        });
        let Embed = new Discord.MessageEmbed()
            .setTitle(`Emojis in ${message.guild.name}.`)
            .setDescription(`**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Over all emojis [${OverallEmojis}]**`)
            .setColor(`#FF0000`);
        message.channel.send(Embed);
    }
}
module.exports = CreateEmojiCommand;
