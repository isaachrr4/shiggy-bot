const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bing')
		.setDescription('Replies with F ya life! Bing Bong!'),
	async execute(interaction) {
		await interaction.reply('F ya life! Bing Bong!');
	},
};