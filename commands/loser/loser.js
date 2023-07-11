const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shiggy')
		.setDescription('Replies with a random reply about Shiggy'),
	async execute(interaction) {
		async function getShiggy() {
			const shiggyResponses = [
				'Shiggy is a LOSER!',
				'Who tf is Shiggy?',
				'Shiggy got no drip',
				'Shiggy the Cock Commander',
				'Shiggy is a lame mf',
				'Shiggy gets no bitches',
				'I rather shit in my hands and clap than play Destiny with this mf',
				'Shiggy is a bitchy bitch, A Bitchy McBitcherson..When I go to McDonalds i get a McBitch because Shiggy is a bitch!...bitch',
				'Shiggy is trash at Destiny 2 and a bum in Diablo IV',
				'Shiggy has a viscous V....according to him..He is sus asf.'
			]
			const randomIndex = Math.floor(Math.random() * shiggyResponses.length);
            return shiggyResponses[randomIndex];
		}
		const shiggy = await getShiggy();
		await interaction.reply(shiggy);
	},
};