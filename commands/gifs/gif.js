const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
require('dotenv').config();


const giphyApiKey = process.env.gif_api_key;


module.exports = {
	data: new SlashCommandBuilder()
		.setName('gif')
		.setDescription('Replies with a random gif!'),
	async execute(interaction) {
        async function getRandomGif() {
            try {
              const response = await axios.get(`https://api.giphy.com/v1/gifs/random`, {
                params: {
                  api_key: giphyApiKey,
                  tag: 'funny'
                }
              });
           //   console.log('response', response);
              return response.data.data.images;
             // return response.data.data.images
            } catch (error) {
              console.error('Error fetching random GIF:', error);
              throw error;
            }
          }


		await interaction.deferReply('Working on it!');
    const result = await getRandomGif();
  //  console.log( 'gif starts here',result);
    await interaction.followUp(result.original.url);
	},
};