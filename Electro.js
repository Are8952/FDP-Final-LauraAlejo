class Electro {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.activa = true;
        this.image = loadImage("./Image/Rayo.png");
    }
    desactivar() {
        this.activa = false;
    }
    getActiva() {
        return this.activa;
    }

    mostrar() {
        // fill(255, 255, 0);
        // ellipse(this.positionX, this.positionY, 50, 20);
        image(this.image, this.positionX, this.positionY, 50, 50);
    }

    mover() {
        this.positionX = this.positionX + 10;
    }

    getPositionX() {
        return this.positionX;
    }

    getPositionY() {
        return this.positionY;
    }

}