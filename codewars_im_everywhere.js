/*
Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.

Task:
Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
The first letter should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word".
*/

const i = (word) => {
  let newWord = 'i';
  const vowels = {
    a : true,
    e : true,
    i : true,
    o : true,
    u : true
  };
  let vowelSum = 0;

  if(word.length === 0) {
    return 'Invalid word';
  }

  for(let i = 0; i < word.length; i++) {
    if(vowels[word[i].toLowerCase()] === true) {
      vowelSum++;
    }
    newWord += word[i];
  }


  if(word[0].toLowerCase() !== 'i' && vowelSum < (word.length / 2) && word[0].toLowerCase() !== word[0]) {
    return newWord;
  } else {
    return 'Invalid word';
  }
}