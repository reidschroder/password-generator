// Constants
const numbersStr = "0123456789";
const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharactersStr = "!@#$%^&*()";
var chosenCharactersStr = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt Section
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for your random password. Password must be at least 8, but no more than 128 characters.");
  if (isNaN(passwordLength) === true) {
    window.alert("Please enter a number");
  generatePassword();
  }



  if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a valid number");
    }

  var numbers = confirm("Would you like numbers in your password?");

  var lowerCase = confirm("Would you like lowercase letters in your password?");

  var upperCase = confirm("Would you like uppercase letters in your password?");

  var specialCharacters = confirm("Would you like special characters in your password?");
// If statements for prompt answers

if (numbers) chosenCharactersStr += numbersStr;
    
if (lowerCase) chosenCharactersStr += lowerCaseStr;
  
if (upperCase) chosenCharactersStr += upperCaseStr;
 
if (specialCharacters) chosenCharactersStr += specialCharactersStr;

var finalPassword = "";
for (var i = 0; i < parseInt(passwordLength); i++) {
    var randomIndex = Math.floor(Math.random() * chosenCharactersStr.length);
    finalPassword += chosenCharactersStr[randomIndex];
}


  
  return finalPassword;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
