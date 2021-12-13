class Minotaur extends Enemy {
    constructor(col, fil, nivelActual) {
        super(col, fil, nivelActual);
        this.image = loadImage("./Image/Minotaur.png");
        this.vida = 100;
    }

    characterDraw() {
        //fill(255, 0, 0);
        fill(255);
        text("Vida: " + this.vida, this.positionX - 20, this.positionY + 50);
        //ellipse(this.positionX, this.positionY, 50, 50);
        imageMode(CENTER);
        image(this.image, this.positionX, this.positionY, 100, 100);
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