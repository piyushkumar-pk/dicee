
// Dice One
var randomNumbar1 = Math.random();
randomNumbar1 = randomNumbar1 * 6;
randomNumbar1 = Math.floor(randomNumbar1) + 1;


if (randomNumbar1 === 1) {
  document.querySelector("img.img1").setAttribute("src", "images/dice1.png")
} else if (randomNumbar1 === 2) {
  document.querySelector("img.img1").setAttribute("src", "images/dice2.png")
} else if (randomNumbar1 === 3) {
  document.querySelector("img.img1").setAttribute("src", "images/dice3.png")
} else if (randomNumbar1 === 4) {
  document.querySelector("img.img1").setAttribute("src", "images/dice4.png")
} else if (randomNumbar1 === 5) {
  document.querySelector("img.img1").setAttribute("src", "images/dice5.png")
} else {
  document.querySelector("img.img1").setAttribute("src", "images/dice6.png")
}


// Dice Two
var randomNumbar2 = Math.random();
randomNumbar2 = randomNumbar2 * 6;
randomNumbar2 = Math.floor(randomNumbar2) + 1;


if (randomNumbar2 === 1) {
  document.querySelector("img.img2").setAttribute("src", "images/dice1.png")
} else if (randomNumbar2 === 2) {
  document.querySelector("img.img2").setAttribute("src", "images/dice2.png")
} else if (randomNumbar2 === 3) {
  document.querySelector("img.img2").setAttribute("src", "images/dice3.png")
} else if (randomNumbar2 === 4) {
  document.querySelector("img.img2").setAttribute("src", "images/dice4.png")
} else if (randomNumbar2 === 5) {
  document.querySelector("img.img2").setAttribute("src", "images/dice5.png")
} else {
  document.querySelector("img.img2").setAttribute("src", "images/dice6.png")
}


//WINNER ANNOUNCE
if (randomNumbar1 > randomNumbar2) {
  document.querySelector("h2").innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumbar1 < randomNumbar2) {
  document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩"
} else {
  document.querySelector("h2").innerHTML = "DRAW!"
}
