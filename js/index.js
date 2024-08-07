import {wordToNumber} from './utils.js';

console.log(wordToNumber("Five")); //5
console.log(wordToNumber("five")); //5
console.log(wordToNumber("FIVE")); //5
console.log(wordToNumber("FiVe")); //5
console.log(wordToNumber("Thirty")); //null
