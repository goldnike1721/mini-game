let name = prompt('What is your name?');
  console.log('Hello, ' + name + '!');
let sayHelloTo = confirm('Hello, ' + name + '!');

let likesProgramming = confirm('Do you like programming?');
if (likesProgramming) {
    console.log('It is an excellent choice!');
} else {
    console.log('No problem, there are many different directions)');
}

alert('JavaScript is an excellent choice!');

let words = [
    'null',
    'undefined',
    'join',
    'concat',
    'shift',
    'unshift',
    'pop',
    'push',
    'reverse',
    'false',
    'true',
    'call',
    'apply',
    'bind',
    'map',
    'split',
    'function',
    'includes'
];

let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(' '));

    let guess = prompt('Guess the letter or press cancel to exit the game.');
    if (guess === null) {
        break; // Вихід з гри
    } else if (guess.length !== 1) {
        alert('Please enter only one letter.');
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            }
        }
    }
}
alert(answerArray.join(' '));
alert('Great job! The word was spelled ' + word + '.');
console.log('Great job! The word was spelled ' + word + '.');