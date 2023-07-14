const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('terry')
		.setDescription("Replies with comments about Terry's bald ahh head fam"),
	async execute(interaction) {
        const getTerry = async() => {
            const terry = [
                "Terry is bald asf. Give this mf a Four loko mixed with three red bulls and Terry can knock down a building with that head",
                "Terry is so mf bald that his head refracts light",
                "Terry is so bald that his thoughts are in 3D",
                "old bowling ball head ass",
                "Terry with his mf milk dud ass head",
                "Not only is Terry bald he old asf too. Mans was born during prohibition",
                "Terry aint nothing but a piece of cheese without the corners",
                "Terry is so bald that mans look like a mf thumb on god",
                
            ];
            const randomIndex = Math.floor(Math.random() * terry.length);
            return terry[randomIndex];

        }
        const roastTerry = await getTerry();
		await interaction.reply(roastTerry);
	},
};