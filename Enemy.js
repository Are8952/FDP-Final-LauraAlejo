class Enemy {
    constructor(col, fil) {
        this.positionX = (fil * 100) + 50;
        this.positionY = (col * 100) + 50;
        this.col = col;
        this.fil = fil;
        this.vida = 3;
    }

    herir(dano) {
        this.vida = dano;
    }

}