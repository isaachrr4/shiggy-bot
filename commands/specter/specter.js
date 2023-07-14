const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('specter')
		.setDescription('Replies with comments about Specter'),
	async execute(interaction) {
        const roastSpecter = async() => {
            const specterRoasts = [
                'Specter got immaculate recoil.',
                'Specters cheeks so juicy they clap when he walks',
                'Mans is a massive Titan meat rider',
                'Specter, Dickeater of Titans',
                'Specter is whole clown. Just like Clay',
                'Specter barely got any melanin in him.',
                'Specters fanatasy is to be the cream in a reverse oreo....if you know what i mean ;)',
                'Specters sus level is over 9000!',
                'Specter backshots go crazy',
                'Specter the only mf that proves how he got no melanin by saying words like "golly"...like bruh...what you on with that coonery dawg??',
                'Specter needs to touch grass and fix his yee-yee ass haircut.'
            ];
            const randomIndex = Math.floor(Math.random() * specterRoasts.length);
            return specterRoasts[randomIndex];

        }
        const specter = await roastSpecter();
		await interaction.reply(specter);
	},
};