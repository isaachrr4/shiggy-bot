const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const pokemonApiKey = process.env.Pokemomn_api_key;


module.exports = {
	data: new SlashCommandBuilder()
		.setName('pokemon')
		.setDescription('rsponds with a random pokemon card.'),
	async execute(interaction) {
         async function getPokemonCard() {
            try {
                const response = await axios.get(
                  'https://api.pokemontcg.io/v2/cards?q=types:*',
                  {
                    headers: {
                      'X-Api-Key': pokemonApiKey,
                    },
                  }
                );
                const { data } = response.data;
                const randomCard = data[Math.floor(Math.random() * data.length)];
                const imageUrl = randomCard.images.small;
                
                const cardName = randomCard.name;
                return imageUrl;
              } catch (error) {
                console.error('Error fetching Pokémon card:', error);
              };

         };
      
          await interaction.deferReply('Getting card!');
          const result = await getPokemonCard();
          await interaction.followUp(result);
        }
		
	};
