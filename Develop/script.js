// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables
var numberOfCharacters;
var includeNumbers;
var includeSpecialCharcters;
var includeUpperCaseLetters;
var includeLowerCaseLetters;
var finalPassword = "";

// character arrays 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "?", "<", ">", "/"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// "final" array
var allIncludedCharacters = [];


// collects the user choices for number of Characters, and if numbers, special characters, caps, or lower case letters are included
function getCharacters() {

  // the while loop brings the user back to the number of character prompt if they enter something that isnt a number between 8 and 120, otherwise inputInvalid is set to false and the loop ends.

  var inputInvalid = true;

  while (inputInvalid) {

    numberOfCharacters = prompt("How Many Characters? (Between 8 and 120)");
  //
    if (numberOfCharacters >= 8 && numberOfCharacters <=120) {
      inputInvalid = false;
    }
    //
    else {
      alert("invalid input, please enter a number between 8 and 120. No letters or special characters, thank you!")
    }
  }

  // as these selections are made their corresponding arrays are merged into the allIncludedCharacters array

  includeNumbers = confirm("Do you want numbers?");
  if (includeNumbers === true) {
    allIncludedCharacters = [...allIncludedCharacters, ...numbers];
  }

  includeSpecialCharcters = confirm("Do you want special characters?");
  if (includeSpecialCharcters === true) {
    allIncludedCharacters = [...allIncludedCharacters, ...specialChar];
  }

  includeUpperCaseLetters = confirm("Do you want upper case letters?");
  if (includeUpperCaseLetters === true) {
    allIncludedCharacters = [...allIncludedCharacters, ...upperCase];
  }

  includeLowerCaseLetters = confirm("Do you want lower case letters?");
  if (includeLowerCaseLetters === true) {
    allIncludedCharacters = [...allIncludedCharacters, ...lowerCase];
  }

  console.log(allIncludedCharacters)
  // if no characters are selected, the password cant be generated.
  if (allIncludedCharacters.length === 0) {
    alert("Pick something idiot")
    return
    // and we head back to generatePassword for the next step
  }
}

function getARandomNumber() {
  for (i = 0; i < numberOfCharacters; i++) {
    var index = Math.floor(Math.random() * allIncludedCharacters.length)
    finalPassword += allIncludedCharacters[index];
    console.log(finalPassword)
  }

  return
}


function generatePassword() {
  getCharacters();
  getARandomNumber();
  return finalPassword
}

// Write password to the #password input (spits it out for me?)
function writePassword() {
  var passwordText = document.querySelector("#password");

  // error error error please empty my poor full box
  // passwordText.value ="";
  var password = generatePassword();
  passwordText.value = password;

}

// Add event listener to generate button. starts us off with 
generateBtn.addEventListener("click", writePassword);
