class Game {
    constructor(){
        this.currentTime = 0;
        this.car = null;
        this.obstacleArr = [];
    }

    startGame(){
        this.car = new Car();
        this.car.create();
        this.addEventListeners();

        setInterval( () => {
            //update timer
            this.currentTime++;

            
            this.obstacleArr.forEach( (obstacle) => {
                //update obstacle positions
                obstacle.moveDown();
                obstacle.draw();
                
                if(obstacle.y === 100) {
                    //collision detection
                    if(this.car.x < obstacle.x + obstacle.width && this.car.x + this.car.width > obstacle.x){
                        alert("game over!");
                    }
                } else if(obstacle.y > 100) {
                    //remove obstacles off the board
                    obstacle.remove(); //remove from the DOM
                    this.obstacleArr.shift(); //remove from our array of obstacles
                }

            });


            //create new obstacles
            if(this.currentTime % 8 === 0){
                const newObstacle = new Obstacle();
                newObstacle.create();
                this.obstacleArr.push(newObstacle);
            }
        }, 200);

    }

    addEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.car.moveLeft();
                this.car.draw();
            } else if (event.key === "ArrowRight") {
                this.car.moveRight();
                this.car.draw();
            }
        });
    }

}




class Thing {
    constructor(){
        this.domElm = null;
        this.gameElm = document.getElementById("game");
    }

    create(){
        this.domElm = document.createElement("div");
        this.domElm.className = this.className;
        this.gameElm.appendChild(this.domElm);
    }

    remove(){
        this.gameElm.removeChild(this.domElm);
    }

    draw(){
        this.domElm.style.width = this.width + "%";
        this.domElm.style.height = this.height + "%";
        this.domElm.style.left = this.x + "%";
        this.domElm.style.top = this.y + "%";
    }

}

class Car extends Thing {
    constructor(){
        super();
        this.x = 50;
        this.y = 100;
        this.width = 10;
        this.height = 20;
        this.className = "car";
    }

    moveLeft(){
        this.x--;
    }

    moveRight(){
        this.x++;
    }

}


class Obstacle extends Thing {
    constructor(){
        super();

        const sizeFactor = Math.floor(Math.random()*(3-1+1) + 1);

        this.width = 10 * sizeFactor;
        this.height = 3 * sizeFactor;

        this.x = Math.floor(Math.random()*(100-this.width+1));
        this.y = 0;

        this.className = "obstacle";
    }

    moveDown(){
        this.y = this.y + 5 ;
    }
}