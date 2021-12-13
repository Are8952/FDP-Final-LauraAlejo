class Medusa extends Enemy {
    constructor(col, fil, nivelActual) {
        super(col, fil, nivelActual);
        this.vida = 200;
        this.image = loadImage("./Image/Medusa.png");
    }

    characterDraw() {
        fill(255, 0, 0);
        //ellipse(this.positionX, this.positionY, 50, 50);
        image(this.image, this.positionX, this.positionY, 100, 100);
        text("Vida: " + this.vida, this.positionX - 20, this.positionY + 50);
    }

    // mover() {
    //     if (this.col < 8) {
    //         this.col -= 1;

    //     }
    //     if (this.col > 0) {
    //         this.col += 1;
    //     }
    //     this.positionY = (this.col * 100) + 50;
    // }

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