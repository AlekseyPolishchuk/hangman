const words = ['apple', 'potato', 'watermelon'];
const word = words[Math.floor(Math.random() * words.length)].split('');
const answerArray = [];
let attempts = 11;

for (let i = 0; i < word.length; i++) {
  answerArray.push('_');
}
alert(answerArray.join(' '));

function game() {
  for (let j = 0; j < 11; j++) {
    const letter = prompt('Enter letter');
    if (letter == null) return alert('GAME OVER');
    if (letter.length !== 1) {
      alert('Enter a single letter');
      continue;
    }
    if (answerArray.includes(letter)) {
      alert('You have already entered this letter');
      continue;
    }

    for (let k = 0; k < word.length; k++) {
      if (word[k] == letter) answerArray[k] = letter;
    }
    if (!word.includes(letter)) {
      alert('Wrong letter');
      attempts--;
    }
    if (attempts === 0) return console.log('GAME OVER');
    alert(`${answerArray.join(' ')} \n\n Attempts left: ${attempts}`);
    if (!answerArray.includes('_')) {
      alert(`Congratulations, you guessed the word "${word.join('')}"`);
      return;
    }
  }
}
game();
