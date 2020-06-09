// @ts-nocheck
import {
  Command
} from "discord-akairo";
import * as Discord from "discord.js";
class PingCommand extends Command {
  constructor() {
    super("help", {
      aliases: ["h", "help"],
      args: [{
        id: "commandname",
        type: "commandAlias",
      },],
      description: {
        text: "Displays this message",
        usage: `help`,
      },
    });
  }

  exec(message: Discord.Message, args: any) {
    message.channel.send(`Helping...`).then((msg) => {
      if (!args.commandname) {
        const _ = new Discord.MessageEmbed()
          .setTitle("Here's your help!")
          .setDescription(
            ``,
          )
          .setColor(`#00FF00`);
        /* tslint:disable */
        this.handler.modules
          .each((command) =>
            _.setDescription(
              _.description +
              `
              \`${this.client.settings.get(message.guild.id, 'prefix', 'e.')}${command.description.usage}\` - ${command.description.text} - aliases: ${
              command.aliases.join(", ")
              }\n`,
            )
          );
        message.channel.send(_);
        /* tslint:enable */
      } else {
        console.log(args.commandname);

        const _ = new Discord.MessageEmbed()
          .setTitle(`\`${args.commandname.aliases.join(', ')}\``)
          .setDescription(
            `
                       ${args.commandname.description.text}\n
                        Usage
                        ${args.commandname.description.usage}
                        `,
          )
          .setColor(`#00FF00`);
        message.channel.send(_);
        msg.delete();
      }
    });
  }
}

module.exports = PingCommand;