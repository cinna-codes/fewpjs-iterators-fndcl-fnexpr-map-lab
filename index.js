const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = tutorials.map((sentence) => {
  const words = sentence.split(" ") // creates an array of all the individual words
  return words.map((word) => { // iterate over the array of individual words & return a new array
    return word[0].toUpperCase() + word.substring(1) // `word[0]` is the first letter of the word; `word.substring(1)` returns the second character of the string + everything after it. `.substring()` can also take two arguments, eg `"Test".substring(1,3)` would return "es"
  }).join(" ") // and join the word array back together into a single string
})

// Original
// const titleCased = () => {
//   return tutorials
// }
