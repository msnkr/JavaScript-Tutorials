function randomNumDiceChanger() {
    let randomNum = Math.ceil( Math.random() * 6 );
    return randomNum;
}

let player1 = randomNumDiceChanger();
let player2 = randomNumDiceChanger();


document.querySelector(".img1").setAttribute("src", "images/dice" + player1 + ".png")
document.querySelector(".img2").setAttribute("src", "images/dice" + player2 + ".png")

if (player1 == player2) {
    document.querySelector("h1").textContent = "It\'s a draw.";
    // console.log("draw")
} else if (player1 > player2) {
    document.querySelector("h1").textContent = "Player 1 wins";
    // console.log("p1")
} else {
    document.querySelector("h1").textContent = "Player 2 wins";
    // console.log("p2")
}
