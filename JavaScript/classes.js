class Game {
    constructor () {
        this.currentTime = 0;
        this.car = null;
        this.obstacle = null;
    }

    startGame () {
        this.car = new Car;
        this.car.create();
        this.addEventListeners();
        setInterval( () => {
            this.obstacle = new Obstacle();
            this.car = new Car();

        }, 3000)
    }

    addEventListeners () {
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                this.car.moveLeft();
                this.car.show();
            } else if (event.key === "ArrowRight") {
                this.car.moveRight();
                this.car.show();
            }
        });
    }
}

class Thing {
    constructor () {
        this.x = 50;
        this.y = 100;
        this.width = 10;
        this.height = 20;
        this.domElm = null;
    }

    create () {
        this.domElm = document.createElement("div");
        this.domElm.className = this.className;
        const gameElm = document.getElementById("game");
        gameElm.appendChild(this.domElm);
    }

    show () {
        this.domElm.style.width = this.width + "%";
        this.domElm.style.height = this.height + "%";
        this.domElm.style.left = this.x + "%";
        this.domElm.style.top = this.y + "%";
    }

}

class Car extends Thing {
    constructor () {
        super();
        this.className = "car";
    }

    moveLeft () {
        this.x--;
    }

    moveRight () {
        this.x++;
    }

}

class Obstacle extends Thing {
    constructor () {
        super();
        this.className = "object"
    }

    moveDown () {
        this.y++;
    }

}