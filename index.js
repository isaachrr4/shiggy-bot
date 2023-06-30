const { Client,  GatewayIntentBits, Collection, Events, } = require('discord.js');
const { token} = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');


 const client = new Client({ intents: [  
   GatewayIntentBits.Guilds,
   GatewayIntentBits.GuildMessages,
   GatewayIntentBits.MessageContent,


 ]});

client.commands = new Collection();
//const client = new Discord.Client();


//const commandsPath = path.join(__dirname, 'commands');
const foldersPath = path.join(__dirname, 'commands');
//const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync(foldersPath);

//  for (const file of commandFiles) {
//  	const filePath = path.join(commandsPath, file);
//  	const command = require(filePath);
//  	// Set a new item in the Collection with the key as the command name and the value as the exported module
//  	if ('data' in command && 'execute' in command) {
// 		client.commands.set(command.data.name, command);
//  	} else {
//  		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
//  	}
//  }


for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
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



// const  getRandomJoke = () =>{
//     const jokes = [
//       "Why don't scientists trust atoms? Because they make up everything!",
//       "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
//       "Why don't skeletons fight each other? They don't have the guts!",
//       "I'm reading a book about anti-gravity. It's impossible to put down!",
//       "Why don't eggs tell jokes? Because they might crack up!",
//       "What's the best thing about Switzerland? I don't know, but their flag is a huge plus!",
//       "Why did the scarecrow win an award? Because he was outstanding in his field!",
//       "What do you call a snowman with a six-pack? An abdominal snowman!",
//       "Why did the bicycle fall over? Because it was two-tired!"
//     ];
  
//     // Get a random joke from the array
//     const randomIndex = Math.floor(Math.random() * jokes.length);
//     return jokes[randomIndex];
//   }


      
  
  


client.login(token);