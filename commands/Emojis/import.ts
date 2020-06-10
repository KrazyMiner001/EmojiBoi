// @ts-nocheck
import {
  Command
} from "discord-akairo";
import * as Discord from "discord.js";
class ImportCommand extends Command {
  constructor() {
    super("import", {
      aliases: ["import", "i"],
      args: [{
        id: "emojiid",
        
      },
        {
        id: "emojiname",
        
      },],
      description: {
        text: "Gets an emoji from another server",
        usage: `import [emojiID] [emojiname //can be different from the source]`,

      },
      clientPermissions: ['MANAGE_EMOJIS'],
      userPermissions: ['MANAGE_EMOJIS'],
    });
  }


  exec(message: Discord.Message, args: any) {
    message.guild.emojis.create(`https://cdn.discordapp.com/emojis/${args.emojiid}.png?v=1`, args.emojiname)
  }

}
module.exports = ImportCommand;