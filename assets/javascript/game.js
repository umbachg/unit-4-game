$(document).ready(function () {

    var winCount = 0;
    $("#winS").text("Wins: " + winCount);
    var lossCount = 0;
    $("#lossS").text("Losses: " + lossCount);
    var userScore = 0;
    var gameScore = Math.floor(Math.random() * 102) + 19;
    var crystOne = Math.floor(Math.random() * 12) + 1;
    var crystTwo = Math.floor(Math.random() * 12) + 1;
    var crystThree = Math.floor(Math.random() * 12) + 1;
    var crystFour = Math.floor(Math.random() * 12) + 1;
    $(".randomNum").text(gameScore);
    $(".scoreCounter").text(userScore);
    var lose = new Audio("./assets/sounds/loss.mp3");
    var win = new Audio("./assets/sounds/win.mp3");
    console.log(gameScore);
    console.log(crystOne);
    console.log(crystTwo);
    console.log(crystThree);
    console.log(crystFour);

    function resetGame() {
        userScore = 0;
        gameScore = Math.floor(Math.random() * 102) + 19;
        crystOne = Math.floor(Math.random() * 12) + 1;
        crystTwo = Math.floor(Math.random() * 12) + 1;
        crystThree = Math.floor(Math.random() * 12) + 1;
        crystFour = Math.floor(Math.random() * 12) + 1;
        $(".randomNum").text(gameScore);
        $(".scoreCounter").text(userScore);
        console.log(gameScore);
        console.log(crystOne);
        console.log(crystTwo);
        console.log(crystThree);
        console.log(crystFour);
    }

    function winGame() {
        winCount = winCount + 1;
        $("#winS").text("Wins: " + winCount);
        win.play();
        resetGame();
    }

    function loseGame() {
        lossCount = lossCount + 1;
        $("#lossS").text("Losses: " + lossCount);
        lose.play();
        resetGame();
    }

// image on click functions: does the math for adding stuff
    $(".cryst1").click(function () {
        userScore = userScore + crystOne;
        console.log(userScore);
        $(".scoreCounter").text(userScore);
        if (userScore === gameScore) {
            winGame();
        } else if (userScore > gameScore) {
            loseGame();
        }
    });

    $(".cryst2").click(function () {
        userScore = userScore + crystTwo;
        console.log(userScore);
        $(".scoreCounter").text(userScore);
        if (userScore === gameScore) {
            winGame();
        } else if (userScore > gameScore) {
            loseGame();
        }
    });

    $(".cryst3").click(function () {
        userScore = userScore + crystThree;
        console.log(userScore);
        $(".scoreCounter").text(userScore);
        if (userScore === gameScore) {
            winGame();
        } else if (userScore > gameScore) {
            loseGame();
        }
    });

    $(".cryst4").click(function () {
        userScore = userScore + crystFour;
        console.log(userScore);
        $(".scoreCounter").text(userScore);
        if (userScore === gameScore) {
            winGame();
        } else if (userScore > gameScore) {
            loseGame();
        }
    });
}); 