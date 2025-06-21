const WORD_LENGTH = 5;
const MAX_TRIES = 6;
const targetWord = "ADMIN"; // You can randomize this from a word list
let currentGuess = "";
let currentRow = 0;

// Listen to keyboard input
document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
  const key = e.key.toUpperCase();

  if (key === "BACKSPACE") {
    currentGuess = currentGuess.slice(0, -1);
    updateGrid();
  } else if (key === "ENTER") {
    if (currentGuess.length === WORD_LENGTH) {
      checkGuess();
    }
  } else if (/^[A-Z]$/.test(key) && currentGuess.length < WORD_LENGTH) {
    currentGuess += key;
    updateGrid();
  }
}

function updateGrid() {
  for (let i = 0; i < WORD_LENGTH; i++) {
    const box = document.getElementById(`cell-${currentRow}-${i}`);
    box.textContent = currentGuess[i] || "";
    box.className = "cell"; // reset class
  }
}

function checkGuess() {
  const guess = currentGuess.toUpperCase();
  const row = currentRow;
  let target = targetWord;

  for (let i = 0; i < WORD_LENGTH; i++) {
    const box = document.getElementById(`cell-${row}-${i}`);
    const letter = guess[i];

    if (letter === target[i]) {
      box.classList.add("correct");
    } else if (target.includes(letter)) {
      box.classList.add("present");
    } else {
      box.classList.add("absent");
    }

    updateKeyboardKey(letter, box.classList);
  }

  if (guess === targetWord) {
    alert("You Win!");
    document.removeEventListener("keydown", handleKeyPress);
  } else {
    currentRow++;
    currentGuess = "";

    if (currentRow === MAX_TRIES) {
      alert(`Game Over! The word was ${targetWord}`);
      document.removeEventListener("keydown", handleKeyPress);
    }
  }
}

function updateKeyboardKey(letter, classes) {
  const key = document.getElementById(`key-${letter}`);
  if (!key) return;
  if (classes.contains("correct")) {
    key.classList = "key correct";
  } else if (classes.contains("present") && !key.classList.contains("correct")) {
    key.classList = "key present";
  } else if (!key.classList.contains("correct") && !key.classList.contains("present")) {
    key.classList = "key absent";
  }
}
