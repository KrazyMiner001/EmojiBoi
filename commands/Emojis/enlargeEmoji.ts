const {
    Command
} = require('discord-akairo');
import * as Discord from 'discord.js'
var fs = require('fs'),
    cloudconvert = new (require('cloudconvert'))(process.env.cckey);

class EnlargeCommand extends Command {
    constructor() {
        super('enlarge', {
            aliases: ['enlarge', 'l'],
            category: 'emojis',
            description: {
                text: 'Enlarges a emoji',
                usage: `enlarge [emoji to enlarge]`
            },
            args: [{
                id: 'em',
                type: 'emoji',
                default: null
            }, ],
            clientPermissions: ['MANAGE_EMOJIS'],
            userPermissions: ['SEND_MESSAGES'],
        });
    }
    exec(message: Discord.Message, args: any) {
        let url = args.em.url;
        console.log(url);

        if (args.em.url.endsWith('svg')) {
            fs.createReadStream(url)
                .pipe(cloudconvert.convert({
                    "inputformat": "svg",
                    "outputformat": "png",
                    "input": "upload"
                }))
                .pipe(fs.createWriteStream('file.png'));
            url = 'file.png'

        }
        const attachment = new Discord.MessageAttachment(`${url}`);
        message.channel.send(attachment);
        if (args.em.url.endsWith('svg')) {
            fs.unlink('file.png', console.error)
        }
    }
}


module.exports = EnlargeCommand;