let words = [
  "javaScript",
  "monkey",
  "amazing",
  "pancake"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
while (remainingLetters > 0) {
  // game code goes here
  alert(answerArray.join(" "));
  // show the player their progress
  let guess = prompt("guess a letter, or click Cancel to stop playing.");
  if (guess === null){
    break;
  } else if (guess.length !== 1) {
    alert("please enter a single letter.");
  } else {
    for (let j = 0; j < word.length; j++){
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(""));
alert("good job! the answer is " + word);
