let a = 10;
let b = 20;

const add = (num1) => (num2) => console.log(num1 + num2);

function countVowels(string) {
  let count = 0;
  const abc = string.toLowerCase();
  for (const i in abc) {
    if (vowels.includes(abc[i])) {
      console.log(abc[i]);
      count++;
    }
  }
  return `The number of vowels in ${string} is ${count}`;
}

console.log(countVowels("I am a very good person, i know english very well"));

const str = "hello your are amazing and hot";
const vowels = ["e", "a", "i", "u", "o"];
