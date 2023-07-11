const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wacky')
		.setDescription('Replies with sus facts about Wacky and his yams'),
	async execute(interaction) {
        async function getWackus() {
            const wackyFacts = [
                'Wacky is also Captain thiccy',
                'Wacky got some succulent yams...YES LAWWDD!!',
                'Wackys yams be eating up his shorts',
                'Wackys cheeks are so phat that each cheek has its own gravitational pull',
                'Wacky the Mouth Messiah',
                'Wacky is Thiccamus Prime',
                'Wacky?...oh yeah on the boat he was known as Sweet Lips. He won an award for having the softest mouth',
                'Wacky be doubled cheeked up on a Thursday afternoon',
                'Wacky can make it clap with no hands. Mans got hella turbulence',
                "Wacky got no Melanin",
                'Wacky likes to deny it but for 20 WHOLE DOLLARS he would let you glaze his yams with maximum efficiency'
            ];
            const randomIndex = Math.floor(Math.random() * wackyFacts.length);
            return wackyFacts[randomIndex];
        }
        const wackus = await getWackus();
		await interaction.reply(wackus);
	},
};