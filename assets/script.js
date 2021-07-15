var generateBtn = document.querySelector("#generate");
// empty password array meant for things to be pushed into.
password = [];

//Random number 
function getRandomNumber() {
  var number = String.fromCharCode(Math.floor(Math.random() * 10)+48);
  return number;
} 
//Lower case
function getLowerCase() {
  var lowerCase = String.fromCharCode(Math.floor(Math.random()*26)+97)
  return lowerCase;
} 
//Upper case
function getUpperCase(){
   var upperCase = String.fromCharCode(Math.floor(Math.random()*26)+65)
   return upperCase;
}
//special
function getRandomSpecial () {
  const symbols ="!@#$%^&*()_+{}|><"
  var special = symbols[Math.floor(Math.random()*symbols.length)]
  return special;
} 

//Generate password
function generatePassword() { 
var passwordLength = window.prompt("How many charcters would you like in you password?")
//condition to meet length
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("You must enter between 8 and 127")
  //promts questions
} else { 
  // user checking criteria 
  var toUpperCase = window.confirm("Do you want to use upper case characters?");
  var toLowerCase = window.confirm("Do you want to use lower case characters");
  var toSpecial = window.confirm("Do you want to use symbols characters?");
  var toNumbers = window.confirm("Do you want to use numbers?");
// loopers empty array and count 
  var looper = [];
  var count = 0; 
// checking user criteria 

  if (toUpperCase === true) { 
    var yes = getUpperCase();
    password.push(yes);
    looper.push({random: getUpperCase()}) 
    count ++;
    
  }
  if(toLowerCase === true) {
    var yes = getLowerCase();
    password.push(yes);
    looper.push({random: getLowerCase()})
    count ++;
  
  }
  if(toSpecial === true) {
    var yes = getRandomSpecial();
    password.push(yes);
    looper.push({random: getRandomSpecial()})
    count ++;
    
  }
  if(toNumbers === true) {
    var yes = getRandomNumber();
    password.push(yes);
    looper.push({random: getRandomNumber()})
    count ++;

  } 

  //smashed together password loop 
  function smashed (length) {
    length -= count;
    for(i = 0; i < length; i++) {
      var looper2 = looper 
      var smashed2 = Math.floor(Math.random() * count);
      password.push(looper2[smashed2].random);
    }   
  } 

  smashed(passwordLength);
  //returns complete string 
  return password.join('');
} 
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

