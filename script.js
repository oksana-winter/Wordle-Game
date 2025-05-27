const wordList = [    
  "email", "login", "cache", "input", "click", "modal", "macro",
  "proxy", "query", "debug", "patch", "cloud", "stack", "array",
  "token", "bytes", "value", "class", "admin", "react", "error",
  "merge", "async", "crypt", "build", "float", "index", "logic",
  "route", "while", "break", "event", "guard", "mutex", "scope",
  "retry", "abort", "https", "model", "utils", "serve", "drive",
  "block", "trace", "linux", "layer", "field", "input"
];

const secretWord = wordList[Math.floor(Math.random() * wordList.length)];
const maxAttempts = 6;
let currentRow = 0;

const input = document.getElementById("guess");
const grid = document.getElementById("grid");
const message = document.getElementById("message");
const button = document.getElementById("check-button");


function handleGuess() {
  const guess = input.value.toLowerCase().trim();
  if (guess.length !== 5 || !/^[a-zA-Z]+$/.test(guess)) {
    message.textContent = "Please enter exactly 5 English letters.";
    return;
  }

  if (currentRow >= maxAttempts) return;

  const rowDiv = grid.children[currentRow];
  for (let i = 0; i < 5; i++) {
    const box = rowDiv.children[i];
    box.textContent = guess[i].toUpperCase();

if (guess[i] === secretWord[i]) {
  box.style.backgroundColor = "#3F51B5"; // blue
  box.style.color = "#0b0c1a";
} else if (secretWord.includes(guess[i])) {
  box.style.backgroundColor = "#ff4081"; // pink
  box.style.color = "#0b0c1a";
} else {
  box.style.backgroundColor = "#2e2e3a"; // gray
  box.style.color = "#777";
}


    box.style.color = "white";
    box.style.border = "2px solid  #2e2e3a";
  }

  if (guess === secretWord) {
    message.textContent = "🎉 Congratulations, you guessed it!";
    input.disabled = true;
    button.disabled = true;
  } else if (++currentRow === maxAttempts) {
    message.textContent = `❌ Game over. Word was: ${secretWord.toUpperCase()}`;
    input.disabled = true;
    button.disabled = true;
  } else {
    message.textContent = "";
  }

  input.value = "";
}


input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});


button.addEventListener("click", handleGuess);
