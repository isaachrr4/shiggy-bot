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
      "I hate double standards. Burn a body at a crematorium, you're being a 'respectful friend'. Do it at home and you're 'destroying evidence'.",
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
      "A wife was cleaning 12-year-old son’s bedroom When she found a load of serious bondage gear and fetish mags, she asked her husband, “what do we do?” The husband said, “I’m no expert, but I wouldn’t fucking spank him.” ",
      "My therapist told me to write letters to the people you hate and then burn them, Did that, but now I don't know what to do with the letters. ",
      " My girlfriends birthday is in a week and she said 'Nothing would make me happier than a diamond ring!'",
      "What did Woody Allen's wife say at his funeral? He was a great husband and father. ",
      " What’s the difference between a bad golfer and a bad skydiver One goes WHACK! “FUCK!” And the other goes “FUCK!” WHACK!",
      "Why are retired Nazis so good with animals? They're veteran Aryans. ",
      " I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors.",
      " Don't be racist; racism is a crime; and crime is for black people.",
      " How does a black girl tell if she is pregnant? A: When she pulls the tampon out all the cotton is picked.",
      "Why doesn't Mexico have a Olympic team? Because everybody that can run, jump, and swim are already in the U.S ",
      " I was at my bank today waiting in a short line. There was just one lady in front of me, an Asian lady, who was trying to exchange yen for dollars. It was obvious she was a little irritated. She asked the teller, 'Why it change? Yesterday, I get two hunat dolla of yen. Today I only get hunat eighty? Why it change?' The teller shrugged his shoulders and said, 'Fluctuations.' The Asian lady says, 'Fluc you white people too!' ",
      "Four gay guys are sitting in a Jacuzzi when all of a sudden, a condom starts floating. One of the gay guys turns around and asks, 'Okay, who farted?' ",
      " What is better than winning the gold medal at the Special Olympics? Having arms and legs.",
      " There is a white boy, a Mexican boy, and a black boy who are all in the fifth grade. Who has the biggest d*ck? The black boy, because he's 18.",
      " What is the difference between Jesus, and a picture of Jesus? You can hang the picture with just one nail.",
      "This brother was banging his sister, and he says, 'You f*ck like Mom,' and she laughs. He says, 'What?' She says, 'That's what Dad said.' "
     ];
  
    // Get a random joke from the array
     const randomIndex = Math.floor(Math.random() * jokes.length);
     return jokes[randomIndex];
   }
 

   const jokes = getRandomJoke();
		await interaction.reply(jokes);
	},
};