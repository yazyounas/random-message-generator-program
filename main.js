
const inspMessages = [`Do not lose hope, nor be sad. `, 
                      `Never underestimate the power of Dua (supplication).`, 
                      `Allah makes the impossible possible.`,
                      `Before going to sleep every night, forgive everyone and sleep with a clean heart.`,
                      `Call upon Me, I will respond to you.`];


const qoutesMessages = [`Make a call to say it all`, 
                        `Learn to really listen and be there for someone else`,
                        `Relax and be still for a few minutes`,
                        `Now read the Statement of Truth through at least three times`,
                        `THE PERFECT POWER WITHIN YOU`]

const astMessages = [`Working together, tiny stars light the universe`,
                     `Just like each star is unique yet makes the`,
                     `universe what it is, the light in you makes you who you are.`,
                     `Don't ever stop reaching for the stars`,
                     `If i can then you surely can`]


const generateMessage = () => {
    const randPhrase = (phrases) => {
      return phrases[Math.floor(Math.random()*phrases.length)]
    }
    return `${randPhrase(inspMessages)}, ${randPhrase(qoutesMessages)}, ${randPhrase(astMessages)}`;
  }


console.log(generateMessage());




