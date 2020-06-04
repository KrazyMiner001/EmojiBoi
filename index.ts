const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


function getTextPart(text: string, part: number) {

  var res = text.split(";");
  return res[part];

}


client.on('message', (msg: any) => {
  if (msg.content.includes(";")) {
    console.log(getTextPart(msg.content, 1) + ' ' + getTextPart(msg.content, 0));


    msg.guild.emojis.create(getTextPart(msg.content, 1), getTextPart(msg.content, 0))
      .then((emoji: any) => console.log(`Created new emoji with name ${emoji.name}`))
      .catch(console.error);
    ((emoji: any) => msg.reply('Added new emoji :thumbsup:'));


  }
})
client.login('NzE4MTE3MzY3MTI4OTE2MTAw.XtkNOw.vhAqwd9YrWFGic7kEzrwRhTom4A');