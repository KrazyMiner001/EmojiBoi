"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_2 = require("tslib");
// @ts-nocheck
const discord_akairo_1 = require("discord-akairo");
const Discord = tslib_2.__importStar(require("discord.js"));
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super("help", {
            aliases: ["help", "h"],
            category: 'info',
            args: [{
                    id: "commandname",
                    type: 'commandAlias'
                },],
            description: {
                text: "Displays this message",
                usage: `help [OPTIONAL: command]`,
            },
            clientPermissions: ['SEND_MESSAGES'],
            userPermissions: ['SEND_MESSAGES'],
        });
    }
    exec(message, args) {
        message.channel.send(`Helping...`).then((msg) => {
            if (!args.commandname) {
                const _ = new Discord.MessageEmbed()
                    .setTitle("Here's your help!")
                    .setColor(`#00FF00`);
                /* tslint:disable */
                this.handler.categories.each((category) => {
                    _.addField(category.id, `${category.map((command) => `\`${this.client.settings.get(message.guild.id, 'prefix', 'e.')}${command.description.usage}\` - ${command.description.text} - aliases: ${command.aliases.join(", ")}\n\n`).join('')}`);
                });
                message.channel.send(_);
                msg.delete();
            }
            else {
                console.log(args.commandname.userPermissions);
                let userPerms = args.commandname.userPermissions;
                args.commandname.userPermissions.forEach(function (item, index) {
                    const caseElementelement = item[0].toUpperCase() + item.slice(1).toLowerCase();
                    console.log(caseElementelement);
                    userPerms[index] = caseElementelement;
                });
                ;
                const userPermsString = userPerms.join(', ');
                let userPermsStringSpaced = userPermsString.replace('_', ' ');
                let clientPerms = args.commandname.clientPermissions;
                args.commandname.clientPermissions.forEach(function (item, index) {
                    const caseElementelement = item[0].toUpperCase() + item.slice(1).toLowerCase();
                    console.log(caseElementelement);
                    clientPerms[index] = caseElementelement;
                });
                ;
                const clientPermsString = clientPerms.join(', ');
                let clientPermsStringSpaced = clientPermsString.replace('_', ' ');
                const _ = new Discord.MessageEmbed()
                    .setTitle(`\`${args.commandname.aliases.join(', ')}\` - ${args.commandname.category}`)
                    .addField('Usage: ', `**${args.commandname.description.usage}**`)
                    .addField('Needed User Permissions:', `${userPermsStringSpaced}`)
                    .addField('Needed Bot Permissions:', `${clientPermsStringSpaced}`)
                    .setTimestamp();
                message.channel.send(_);
                msg.delete();
            }
        });
    }
}
module.exports = PingCommand;
