class Charybdis extends Enemy {
    constructor(col, fil, nivelActual) {
        super(col, fil, nivelActual);
        this.image = loadImage("./Image/Charybdis.png");
        this.vida = 300;
        this.direction = 1;
    }

    characterDraw() {
        imageMode(CENTER);
        image(this.image, this.positionX, this.positionY, 100, 100);
        text("Vida: " + this.vida, this.positionX - 20, this.positionY + 50);

    }

    mover() {
        if (frameCount % 20 == 0) {
            this.col = this.col + 1 * this.direction;
            if (this.col < 3) {
                this.direction = this.direction * -1;
            }
            if (this.col > 5) {
                this.direction = this.direction * -1;
            }
            // if (this.col >= 5) {
            //     this.col -= 1;
            // }
            this.positionY = (this.col * 100) + 50;
        }
    }

    getCol() {
        return this.col;
    }

    setCol(col) {
        this.col = col;
    }

    getFil() {
        return this.fil;
    }

    setFil(fil) {
        this.fil = fil;
    }

}