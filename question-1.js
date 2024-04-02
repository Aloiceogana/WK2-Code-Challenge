// creating a function and gave it a parameter of input which accepts a string as input
function replace(input) {
  // Stores the swapped characters into this variable
  let replaced = ''
  // Iterates through each letter of the string
  for (let char of input) {
      // Checks if the letter is lowercase if it, it changes to uppercase and vice versa
      replaced += char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
  }
  // Returns the swapped characters
  return replaced
}

// Checks the output
console.log(replace("The Quick Brown Fox"));  


