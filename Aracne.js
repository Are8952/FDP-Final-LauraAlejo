class Aracne extends Enemy {
    constructor(col, fil, nivelActual) {
        super(col, fil, nivelActual);
        this.image = loadImage("./Image/Arachne.png");
        this.vida = 300;
    }

    characterDraw() {
        // fill(255, 0, 0);
        // ellipse(this.positionX, this.positionY, 50, 50);
        imageMode(CENTER);
        image(this.image, this.positionX, this.positionY, 100, 100);
        text("Vida: " + this.vida, this.positionX - 20, this.positionY + 50);

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