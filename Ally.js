class Ally {
    constructor(col, fil, nivelActual) {
        this.positionX = (fil * 100) + 50;
        this.positionY = (col * 100) + 50;
        this.col = col;
        this.fil = fil;
        this.nivelActual = nivelActual;
    }

    characterDraw() {
        fill(0, 255, 0);
        ellipse(this.positionX, this.positionY, 50, 50);
    }

    setCol(col) {
        this.col = col;
    }

    setFil(fil) {
        this.fil = fil;
    }
}