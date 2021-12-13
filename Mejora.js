class Mejora {
    constructor(col, fil) {
        this.positionX = (fil * 100) + 50;
        this.positionY = (col * 100) + 50;
        this.col = col;
        this.fil = fil;
    }

    mostrar() {
        fill(0, 255, 255);
        ellipse(this.positionX, this.positionY, 25, 25);
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