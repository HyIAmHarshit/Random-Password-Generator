const passbox = document.querySelector("#password");
const length = 12;
const numbers = "0123456789";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbol = "@#$%^&*()_+{}[]<>/?|~";
const allchars = upperCaseLetters + lowerCaseLetters + numbers + symbol;
function createpass() {
  let password = "";
  password +=
    upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
  password +=
    lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passbox.value = password;
}

function copypass() {
  passbox.select();
  document.execCommand("copy");
}
