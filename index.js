const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();
let db = new sqlite3.Database('moolah.db', sqlite3.OPEN_READWRITE,  (err) => {
  if (err) {
    return console.error(err.message);
  }
});

//importing commands
const hello = require("./commands/hello.js");
const sex = require("./commands/sex.js");
const balance = require("./commands/balance.js");
const start = require("./commands/start.js");

client.once('ready', () => {
  console.log("Ready!")
});

client.on('message', message => {
  	if (message.author.bot) return;
        var user = message.author.id
	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	console.log(message.content);
        switch (command) {
        case 'hello':
        case 'hallo':
          hello.command(message); 
          break; 
        case 'sex':
          sex.command(message);
          break;
        case 'bal':
        case 'balance':
          balance.command(user, message, db);
          break;
        case 'start':
          start.command(user, message, db);
          break;
        default:
          return;
       }
        
});

client.login(process.env.TOKEN);
