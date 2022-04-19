const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('ShiggyBot is ready to destroy!')
});



client.login(token);