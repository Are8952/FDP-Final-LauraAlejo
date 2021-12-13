class Aracne extends Enemy {
    constructor(col, fil, nivelActual) {
        super(col, fil, nivelActual);
    }

    characterDraw() {
        fill(255, 0, 0);
        ellipse(this.positionX, this.positionY, 50, 50);
    }

    damage() {

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