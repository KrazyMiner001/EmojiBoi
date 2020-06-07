
const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class CreateEmojiCommand extends Command {
    constructor() {
        super('HowAmnyEmojia', {
            aliases: ['emojis'],

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
            } else {
                EmojiCount++;
                Emojis += Emoji(emoji.id);
            }
        });
        let Embed = new MessageEmbed()
            .setTitle(`Emojis in ${message.guild.name}.`)
            .setDescription(
                `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Over all emojis [${OverallEmojis}]**`
            )
            .setColor(`#FF0000`);
        message.channel.send(Embed);
    }
}

module.exports = CreateEmojiCommand;