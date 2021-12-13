class Enemy {
    constructor(col, fil) {
        this.positionX = (fil * 100) + 50;
        this.positionY = (col * 100) + 50;
        this.col = col;
        this.fil = fil;
        this.estado = 0;
    }

    herir(dano) {
        //console.log("funciono??");
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 100;
            this.estado = 0;
        }
    }

    getVida() {
        return this.vida;
    }

    getPositionX() {
        return this.positionX;
    }

    getPositionY() {
        return this.positionY;
    }

    setPositionX(positionX) {
        this.positionX = positionX;
    }

    setPositionY(positionY) {
        this.positionY = positionY;
    }

    setCol(col) {
        this.col = col;
    }


    setFil(fil) {
        this.fil = fil;
    }

}