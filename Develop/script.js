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
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","&","*","?","<",">","/"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// "final" array
var allIncludedCharacters = [];



//  allIncludedCharacters = [...allIncludedCharacters,...x ];



function getCharacters (){


  numberOfCharacters = prompt ("How Many Characters? (Between 8 and 120)");
    // if? numofchar less that 8 error
    // else if numb of character greater than 120 error
    // updates number of characters to answer


    // checks for null
    // if (numOfChars == '0' || numOfChars === '') error (alert)

  includeNumbers = confirm ("Do you want numbers?");
    if (includeNumbers === true){
      allIncludedCharacters = [...allIncludedCharacters,...numbers ];
    }
  
  includeSpecialCharcters = confirm ("Do you want special characters?");
    if (includeSpecialCharcters === true){
      allIncludedCharacters = [...allIncludedCharacters,...specialChar ];
    }
  
  includeUpperCaseLetters = confirm ("Do you want upper case letters?");
    if (includeUpperCaseLetters === true){
      allIncludedCharacters = [...allIncludedCharacters,...upperCase ];
    }
  
  includeLowerCaseLetters = confirm ("Do you want lower case letters?");
    if (includeLowerCaseLetters === true){
      allIncludedCharacters = [...allIncludedCharacters,...lowerCase ];
    }
  
  console.log (allIncludedCharacters)

  // if (array.length === 0) return 
  
}



function getARandomNumber(){
  // for loop
  return
}


function generatePassword(){
  getCharacters();
  


  var randoNumber = getARandomNumber()
  finalPassword = finalPassword + randoNumber;
  // return finalPassword
} 

// Write password to the #password input (spits it out for me?)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
