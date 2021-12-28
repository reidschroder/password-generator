// Constants
const numbers = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacters = "!@#$%^&*()";

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

  var numbers = confirm("Would you like numbers in your password?");

  var lowerCase = confirm("Would you like lowercase letters in your password?");

  var upperCase = confirm("Would you like uppercase letters in your password?");

  var specialCharacters = confirm("Would you like special characters in your password?");
}

// If statements for prompt answers

if (numbers === true) {

}

if (lowerCase === true) {

}

if (upperCase === true) {

}

if (specialCharacters === true) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
