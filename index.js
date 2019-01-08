// Load up the discord.js library
const Discord = require("discord.js");

const client = new Discord.Client();
// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");

client.on("ready", () => {
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

client.user.setActivity(`Removing Evan from ${client.channels.size} channels`);
});

client.on("message", async message => {
    if(message.author.id === config.userid){
        message.delete();
    }
});

client.login(config.token);
