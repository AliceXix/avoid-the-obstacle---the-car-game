const myGame = new Game();
myGame.startGame();

document.addEventListener("keydown", function(event){
    console.log("a key was pressed!!")
    if (event.key === "ArrowLeft") {
        console.log("arrow left pressed");
    } else if (event.key === "ArrowRight") {
        console.log("arrow right pressed");
    }
});
