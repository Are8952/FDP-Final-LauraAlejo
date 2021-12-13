class Life {
    constructor(col, fil) {
        this.positionX = (fil * 100) + 50;
        this.positionY = (col * 100) + 50;
        this.col = col;
        this.fil = fil;
        this.image = loadImage("./Image/Vida.png");
    }

    characterDraw() {
        fill(255, 200, 0);
        //rectMode(CENTER);
        //ellipse(this.positionX, this.positionY, 50, 50);
        image(this.image, this.positionX, this.positionY, 50, 50);
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