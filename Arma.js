class Arma {
    constructor(fila, columna) {
        this.fila = fila;
        this.columna = columna;
        this.positionX = (columna * 100) + 50;
        this.positionY = (fila * 100) + 50;
        this.municion = [];
    }

    mostrar() {
        fill(0, 255, 255);
        ellipse(this.positionX, this.positionY, 25, 25);
        for (let index = 0; index < this.municion.length; index++) {
            const bala = this.municion[index];
            bala.mostrar();
            bala.mover();
        }
    }

    disparar() {
        let nuevaBala = new Electro(this.positionX, this.positionY);
        this.municion.push(nuevaBala);
    }

    getPositionX() {
        return this.positionX;
    }

    getPositionY() {
        return this.positionY;
    }
}