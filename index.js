var Discord = require('discord.js');
var client = new Discord.Client();
client.on('ready', function () {
    console.log("Logged in as " + client.user.tag + "!");
});
function getTextPart(text, part) {
    var res = text.split(";");
    return res[part];
}
client.on('message', function (msg) {
    if (msg.content.includes(";")) {
        console.log(getTextPart(msg.content, 1) + ' ' + getTextPart(msg.content, 0));
        msg.guild.emojis.create(getTextPart(msg.content, 1), getTextPart(msg.content, 0))
            .then(function (emoji) { return console.log("Created new emoji with name " + emoji.name); })["catch"](console.error);
        (function (emoji) { return msg.reply('Added new emoji :thumbsup:'); });
    }
});
client.login('NzE4MTE3MzY3MTI4OTE2MTAw.XtkNOw.vhAqwd9YrWFGic7kEzrwRhTom4A');
