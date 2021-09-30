class Game {
    constructor () {
        this.currentTime = 0;
        this.car = null;
    }

    startGame () {
        this.car = new Car();
        this.car.createCar();
    }
    
}

class Car {
    constructor () {
        this.x = 50;
        this.y = 100;
        this.width = 10;
        this.height = 20;
    }

    moveLeft () {
        this.x--;
    }

    moveRight () {
        this.x++;
    }

    createCar () {
        //create element and add CSS
        const divTag = document.createElement("div");
        divTag.className = "car";
        divTag.style.width = this.width + "%";
        divTag.style.height = this.height + "%";
        divTag.style.left = this.x + "%";
        divTag.style.top = this.y + "%";

        //append to DOM
        divTag.innerHTML = "This is a cool car"
        const gameElm = document.getElementById("game");
        gameElm.appendChild(divTag);
    }
}