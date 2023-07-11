const { Client,  GatewayIntentBits, Collection, Events, } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');


 const client = new Client({ intents: [  
   GatewayIntentBits.Guilds,
   GatewayIntentBits.GuildMembers,
   GatewayIntentBits.GuildMessages,
   GatewayIntentBits.MessageContent,
 ]});

client.commands = new Collection();



//const commandsPath = path.join(__dirname, 'commands');
const foldersPath = path.join(__dirname, 'commands');
//const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync(foldersPath);


for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.on('ready', () => {
    console.log('ShiggyBot is ready to destroy!')
});

client.on(Events.InteractionCreate, async interaction => {
	console.log(interaction);
  if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);
  console.log(interaction.commandName)

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}

})





client.login(token);