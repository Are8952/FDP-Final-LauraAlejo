class Mejora {
    constructor(col, fil) {
        this.positionX = (fil * 100) + 50;
        this.positionY = (col * 100) + 50;
        this.col = col;
        this.fil = fil;
        this.image = loadImage("./Image/Rayo Medusa.png");
        this.image2 = loadImage("./Image/Rayo Charybdis.png");
        this.image3 = loadImage("./Image/Rayo Arachne.png");
    }

    mostrar(pantallas) {
        // fill(0, 255, 255);
        // ellipse(this.positionX, this.positionY, 25, 25);
        switch (pantallas) {
            case 1:
                image(this.image, this.positionX, this.positionY, 50, 50);
                break;
            case 2:
                console.log(pantallas);
                image(this.image3, this.positionX, this.positionY, 50, 50);
                break;
            case 3:
                console.log(pantallas);
                image(this.image2, this.positionX, this.positionY, 50, 50);
                break;
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

    setPositionX(positionX) {
        this.positionX = positionX;
    }
    setPositionY(positionY) {
        this.positionY = positionY;
    }
}