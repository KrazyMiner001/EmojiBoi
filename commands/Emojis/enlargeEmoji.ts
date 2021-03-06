const {
    Command
} = require('discord-akairo');
import * as Discord from 'discord.js'
var fs = require('fs')
//import CloudConvert from 'cloudconvert'
import * as dotenv from "dotenv"
dotenv.config()

//const cloudConvert = new CloudConvert(process.env.token, true)

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
            },],
            clientPermissions: ['MANAGE_EMOJIS'],
            userPermissions: ['SEND_MESSAGES'],
        });
    }
    async exec(message: Discord.Message, args: any) {
        let url = args.em.url;
        console.log(url);

        // if (args.em.url.endsWith('svg')) {

        //     let job = await cloudConvert.jobs.create({
        //         "tasks": {
        //             "discord-svg": {
        //                 "operation": "import/url",
        //                 "url": "insert-twemoji-url-here"
        //             },
        //             "convert": {
        //                 "operation": "convert",
        //                 "input_format": "svg",
        //                 "output_format": "png",
        //                 "engine": "inkscape",
        //                 "input": [
        //                     "discord-svg"
        //                 ],
        //                 "pixel_density": 96,
        //                 "engine_version": "0.92.4",
        //                 "filename": "output.png"
        //             },
        //             "export": {
        //                 "operation": "export/url",
        //                 "input": [
        //                     "convert"
        //                 ],
        //                 "inline": false,
        //                 "archive_multiple_files": false
        //             }
        //         }
        //     });


            const attachment = new Discord.MessageAttachment(`${url}`);
            message.channel.send(attachment);
            // if (args.em.url.endsWith('svg')) {
            //     fs.unlink('file.png', console.error)
            // }
        }
    }

module.exports = EnlargeCommand;