const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("569056109877395470")
setInterval(function() {
channel.send(`rakan pro`);
}, 30)
})

client.login(process.env.BOT_TOKEN);