// Assignment Code
var generateBtn = document.querySelector("#generate");



var numberOfCharacters;
var includeNumbers;
var includeSpecialCharcters;
var includeUpperCaseLetters;
var includeLowerCaseNumbers;

var finalPassword = "";


var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","&","*","?","<",">","/"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];















function getARandomNumber(){
  return 9;
}

function generatePassword(){
  numberOfCharacters = prompt ("How Many Characters?")
  includeNumbers = confirm ("Do you want numbers?")
  includeSpecialCharcters = confirm ("Do you want special characters?")
  includeUpperCaseLetters = confirm ("Do you want upper case letters?")
  includeLowerCaseNumbers = confirm ("Do you want lower case letters?")
  

  var randoNumber = getARandomNumber()
  finalPassword = finalPassword + randoNumber;
} 










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
