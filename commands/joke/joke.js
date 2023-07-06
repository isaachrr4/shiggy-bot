const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('Replies with a joke!'),
	async execute(interaction) {
    const  getRandomJoke = () =>{
     const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
       "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
       "Why don't skeletons fight each other? They don't have the guts!",
       "I'm reading a book about anti-gravity. It's impossible to put down!",
       "Why don't eggs tell jokes? Because they might crack up!",
      "What's the best thing about Switzerland? I don't know, but their flag is a huge plus!",
       "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "What do you call a snowman with a six-pack? An abdominal snowman!",
      "Why did the bicycle fall over? Because it was two-tired!",
      " Today, I asked my phone “Siri, why am I still single?” and it activated the front camera.",
      "I was digging in our garden and found a chest full of gold coins. I wanted to run straight home to tell my wife about it. Then I remembered why I was digging in our garden.",
      " My mom died when we couldnt remember her blood type. As she died, she kept telling us to “be positive,” but its hard without her.",
      "My elderly relatives liked to tease me at weddings, saying, “You’ll be next!” They soon stopped though, once I started doing the same to them at funerals.",
      "My girlfriend’s dog died, so I tried to cheer her up by getting her an identical one. It just made her more upset. She screamed at me and said, “What am I supposed to do with two dead dogs?”",
      "I hate double standards. Burn a body at a crematorium, you're being a respectful friend. Do it at home and you're destroying evidence.",
      "You don’t need a parachute to go skydiving. You need a parachute to go skydiving twice. ",
      "When I die, I want to die like my grandfather who died peacefully in his sleep. Not screaming like all the passengers in his car.",
      "The doctor gave me one year to live, so I shot him. The judge gave me 15 years. Problem solved",
      "Two hunters are in the woods when one of them collapses. His hunting buddy immediately calls 911. My friend isn't breathing, he shouts into the phone. What should I do? Relax, the operator tells him. I can help. First, let's make sure he's dead. There's silence, and then a gunshot. The guy gets back on the phone and says, OK, now what?",
      "A guy walks with a young boy into the woods. The boy turns to him and says, Hey mister, it's getting really dark and I'm scared. The man replies, How do you think I feel? I have to walk back alone.",
      " What is the worst combination of illnesses? Alzheimer’s and diarrhea. You’re running but can’t remember where.",
      " During a show, I once asked the crowd if they were pro-guns, and the majority belted out in approval.",
      "I asked a man in the front row why he was pro-guns, and he gave me the basic personal protection liberty 2nd amendment hooplah. Very seriously, I told the crowd, I’m pro-guns because I enjoy living in a world with only four Nirvana albums.   My friend was the only one who laughed.",
      " My girlfriend, who’s into astronomy, asked me how stars die. “Usually an overdose,” I told her.",
      " What’s the difference between me and cancer?  My dad didn’t beat cancer.",
      "I started crying when dad was cutting onions. Onions was such a good dog ",
      " My parents raised me as an only child, which really pissed off my brother.",
      " It’s sad how my friend was struck from the medical register for sleeping with a patient.  He was a great vet.",
      " They say there’s a person capable of murder in every friendship group. I suspected it was Dave, so I killed him before he could cause any harm.",
      "What do you call a blonde in the freezer? Her parents named her Jessica, so we should probably continue to call her that. She was supposed to graduate tomorrow. ",
      " What’s yellow and can’t swim? A bus full of children.",
      "What do tofu and a dildo have in common? They are both meat substitutes. ",
      "What’s the difference between a hockey player and a hippie chick? The hockey player changes his pads after three periods. ",
      "A wife was cleaning 12-year-old son’s bedroom When she found a load of serious bondage gear and fetish mags, she asked her husband, “what do we do?” The husband said, “I’m no expert, but I wouldn’t fucking spank him.” "
     ];
  
    // Get a random joke from the array
     const randomIndex = Math.floor(Math.random() * jokes.length);
     return jokes[randomIndex];
   }
 


		await interaction.reply(getRandomJoke());
	},
};