// Kanye Wisdom Context Tree
const quoteTree = {
  money: {
    keywords: ['money', 'broke', 'poor', 'rich', 'job', 'career', 'work', 'salary', 'business', 'hustle', 'grind', 'unemployed', 'debt', 'bills', 'afford', 'expensive', 'investment', 'wealth', 'income'],
    quotes: [
      "Having money isn't everything, not having it is.",
      "I'm not gonna lie to you. I love money, and money loves me.",
      "For me, money is not my definition of success. Inspiring people is a definition of success.",
      "I'm a creative genius and there's no other way to word it.",
      "The plan is to fan this spark into a flame.",
      "I feel like I'm too busy writing history to read it.",
      "My greatest award is what I'm about to do."
    ]
  },
  love: {
    keywords: ['love', 'heart', 'relationship', 'girlfriend', 'boyfriend', 'dating', 'marriage', 'divorce', 'breakup', 'crush', 'romance', 'lonely', 'alone', 'miss', 'ex', 'wife', 'husband', 'partner', 'single', 'heartbreak', 'heartbroken'],
    quotes: [
      "My greatest pain in life is that I will never be able to see myself perform live.",
      "People always say that you can't please everybody. I think that's a cop-out.",
      "Nothing in life is promised except death.",
      "I refuse to accept other people's ideas of happiness for me.",
      "Love your haters - they're your biggest fans.",
      "I'm on the pursuit of awesomeness, excellence is the bare minimum.",
      "I still think I am the greatest."
    ]
  },
  confidence: {
    keywords: ['doubt', 'scared', 'afraid', 'anxious', 'nervous', 'insecure', 'confident', 'weak', 'strong', 'believe', 'faith', 'trust', 'myself', 'ugly', 'beautiful', 'worth', 'worthless', 'loser', 'failure', 'impostor', 'fake'],
    quotes: [
      "People always tell you 'Be humble.' When was the last time someone told you to be amazing?",
      "Would you believe in what you believe in if you were the only one who believed it?",
      "Everything I'm not made me everything I am.",
      "I'm not comfortable being preachy, but more people need to start spending more time in libraries.",
      "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.",
      "I am Warhol. I am the No. 1 most impactful artist of our generation.",
      "Believe in your flyness, conquer your shyness."
    ]
  },
  creativity: {
    keywords: ['create', 'art', 'music', 'write', 'design', 'creative', 'idea', 'inspiration', 'artist', 'vision', 'dream', 'imagine', 'build', 'make', 'project', 'album', 'song', 'paint', 'draw', 'fashion', 'style'],
    quotes: [
      "I am a god. I am a god. I am a god.",
      "I'm a creative genius and there's no other way to word it.",
      "George Bush doesn't care about black people.",
      "I feel like I'm too busy writing history to read it.",
      "One of my biggest achilles heels has been my ego.",
      "I'm doing pretty good as far as geniuses go.",
      "The plan is to fan this spark into a flame.",
      "You can't look at a glass half full or empty if it's overflowing."
    ]
  },
  haters: {
    keywords: ['hate', 'hater', 'enemy', 'jealous', 'critic', 'criticism', 'troll', 'attack', 'drama', 'beef', 'fight', 'against', 'cancel', 'cancelled', 'gossip', 'rumors', 'talk', 'trash'],
    quotes: [
      "Love your haters - they're your biggest fans.",
      "Fur pillows are hard to actually sleep on.",
      "People always say that you can't please everybody. I think that's a cop-out.",
      "I refuse to accept other people's ideas of happiness for me.",
      "I'm on the pursuit of awesomeness, excellence is the bare minimum.",
      "I still think I am the greatest.",
      "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun."
    ]
  },
  dreams: {
    keywords: ['dream', 'goal', 'future', 'plan', 'ambition', 'hope', 'wish', 'want', 'desire', 'aspire', 'achieve', 'success', 'destiny', 'fate', 'purpose', 'meaning', 'life', 'path', 'journey'],
    quotes: [
      "My greatest award is what I'm about to do.",
      "Would you believe in what you believe in if you were the only one who believed it?",
      "I feel like I'm too busy writing history to read it.",
      "The plan is to fan this spark into a flame.",
      "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.",
      "I'm on the pursuit of awesomeness, excellence is the bare minimum.",
      "You can't look at a glass half full or empty if it's overflowing.",
      "Everything I'm not made me everything I am."
    ]
  },
  struggle: {
    keywords: ['sad', 'depressed', 'depression', 'cry', 'crying', 'pain', 'hurt', 'suffer', 'struggle', 'hard', 'difficult', 'tough', 'stressed', 'overwhelmed', 'anxious', 'anxiety', 'dark', 'lost', 'stuck', 'hopeless', 'tired', 'exhausted', 'burnout'],
    quotes: [
      "Nothing in life is promised except death.",
      "My greatest pain in life is that I will never be able to see myself perform live.",
      "Everything I'm not made me everything I am.",
      "I refuse to accept other people's ideas of happiness for me.",
      "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.",
      "The plan is to fan this spark into a flame.",
      "You can't look at a glass half full or empty if it's overflowing."
    ]
  },
  anger: {
    keywords: ['angry', 'mad', 'pissed', 'furious', 'rage', 'frustrated', 'annoyed', 'irritated', 'unfair', 'injustice', 'wrong', 'stupid', 'idiot', 'hate', 'sick of', 'fed up'],
    quotes: [
      "George Bush doesn't care about black people.",
      "One of my biggest achilles heels has been my ego.",
      "I refuse to accept other people's ideas of happiness for me.",
      "Fur pillows are hard to actually sleep on.",
      "I'll say things that are serious and put them in a joke form so people can enjoy them.",
      "Love your haters - they're your biggest fans.",
      "People always say that you can't please everybody. I think that's a cop-out."
    ]
  },
  family: {
    keywords: ['family', 'mom', 'dad', 'mother', 'father', 'parent', 'kid', 'child', 'children', 'son', 'daughter', 'brother', 'sister', 'home', 'baby', 'pregnant'],
    quotes: [
      "My mom was my everything.",
      "Nothing in life is promised except death.",
      "For me, money is not my definition of success. Inspiring people is a definition of success.",
      "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.",
      "Everything I'm not made me everything I am.",
      "I refuse to accept other people's ideas of happiness for me."
    ]
  },
  faith: {
    keywords: ['god', 'jesus', 'faith', 'pray', 'prayer', 'church', 'soul', 'spirit', 'spiritual', 'believe', 'religion', 'christian', 'bible', 'blessed', 'blessing', 'sin', 'heaven', 'hell'],
    quotes: [
      "I am a god. I am a god. I am a god.",
      "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.",
      "Would you believe in what you believe in if you were the only one who believed it?",
      "I am God's vessel. But my greatest pain in life is that I will never be able to see myself perform live.",
      "Nothing in life is promised except death.",
      "My greatest award is what I'm about to do."
    ]
  },
  general: {
    keywords: [],
    quotes: [
      "I am God's vessel. But my greatest pain in life is that I will never be able to see myself perform live.",
      "People always tell you 'Be humble.' When was the last time someone told you to be amazing?",
      "Everything I'm not made me everything I am.",
      "I feel like I'm too busy writing history to read it.",
      "My greatest award is what I'm about to do.",
      "I refuse to accept other people's ideas of happiness for me.",
      "Would you believe in what you believe in if you were the only one who believed it?",
      "Fur pillows are hard to actually sleep on.",
      "I'm on the pursuit of awesomeness, excellence is the bare minimum.",
      "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.",
      "Love your haters - they're your biggest fans.",
      "One of my biggest achilles heels has been my ego.",
      "The plan is to fan this spark into a flame.",
      "You can't look at a glass half full or empty if it's overflowing.",
      "I still think I am the greatest.",
      "Believe in your flyness, conquer your shyness."
    ]
  }
};

function matchContext(userInput) {
  const input = userInput.toLowerCase();
  const words = input.split(/\s+/);
  
  let bestMatch = { context: 'general', score: 0 };
  
  for (const [contextName, contextData] of Object.entries(quoteTree)) {
    if (contextName === 'general') continue;
    
    let score = 0;
    for (const keyword of contextData.keywords) {
      if (words.includes(keyword)) {
        score += 2;
      } else if (input.includes(keyword)) {
        score += 1;
      }
    }
    
    if (score > bestMatch.score) {
      bestMatch = { context: contextName, score };
    }
  }
  
  return bestMatch;
}

function getWisdom(userInput) {
  const match = matchContext(userInput);
  const contextData = quoteTree[match.context];
  const quotes = contextData.quotes;
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return { quote, context: match.context, score: match.score };
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'POST') {
    const { issue } = req.body || {};
    const wisdom = getWisdom(issue || '');
    return res.status(200).json(wisdom);
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
