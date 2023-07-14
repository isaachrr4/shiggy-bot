const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('starwars')
		.setDescription('Replies with info on a random star wars character!'),
	async execute(interaction) {
         const getCharacter = async() => {

 try {
      const response = await axios.get('https://swapi.dev/api/people/');
      const characters = response.data.results;
      const randomCharacter = characters[Math.floor(Math.random() * characters.length)];

      const characterInfo = await axios.get(randomCharacter.url);
      console.log(characterInfo);

      const embed = {
        color: 0x0099ff,
        title: randomCharacter.name,
        fields: [
          {
            name: 'Height',
            value: characterInfo.data.height,
            inline: true,
          },
          {
            name: 'Mass',
            value: characterInfo.data.mass,
            inline: true,
          },
          {
            name: 'Hair Color',
            value: characterInfo.data.hair_color,
            inline: true,
          },
          {
            name: 'Skin Color',
            value: characterInfo.data.skin_color,
            inline: true,
          },
          {
            name: 'Eye Color',
            value: characterInfo.data.eye_color,
            inline: true,
          },
          {
            name: 'Birth Year',
            value: characterInfo.data.birth_year,
            inline: true,
          },
          {
            name: 'Gender',
            value: characterInfo.data.gender,
            inline: true,
          },
         
        ],
      };

      return { embeds: [embed] };
    } catch (error) {
      console.error('Error:', error);
    
    }

         }
		await interaction.deferReply('getting info!');
        const results = await getCharacter();
        console.log('info starts here', results);
        await interaction.followUp(results);
	},
};