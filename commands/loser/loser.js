const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('loser')
		.setDescription('Replies with Shiggy is a Loser!'),
	async execute(interaction) {
		await interaction.reply('Shiggy is a LOSER!');
	},
};