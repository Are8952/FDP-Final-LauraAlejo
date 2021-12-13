class Map {
    constructor(nivelActual) {
        this.niveles = [this.nivelA, this.nivelB, this.nivelC, this.nivelD];
        this.nivelA = [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0],
            [4, 1, 1, 0, 0, 0, 0, 3],
        ];

        this.nivelB = [
            [0, 0, 0, 0, 0, 1, 0, 3],
            [1, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 0, 1, 0, 0, 0, 1],
            [0, 1, 4, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 1],
        ];

        this.nivelC = [
            [0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 4, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 3, 0, 0],
        ];

        this.nivelD = [
            [0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 0, 1, 0, 0, 0, 1, 3],
            [0, 0, 1, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 1, 4, 1, 1, 0, 1],
        ];
        this.nivelActual = nivelActual;
        if (this.nivelActual == 0) {
            this.laser = new Arma(1, 1);
        } else {
            //this.laser.setFila(-1);
            //this.laser.setCol(-1);
        }
    }

    pintarNivel(nivel) {
        for (let fila = 0; fila < fil; fila++) {
            for (let col = 0; col < colu; col++) {
                if (nivel[fila][col] == 0 || nivel[fila][col] == 4) {
                    fill(255);
                } else if (nivel[fila][col] == 3) {
                    fill(0, 255, 255);
                } else {
                    fill(1);
                }
                rect(col * 100, fila * 100, 100, 100);

            }
        }
        if (this.laser !== null) {
            //this.laser.mostrar();
        }

    }

    getNivelA() {
        return this.nivelA;
    }
    getNivelB() {
        return this.nivelB;
    }
    getNivelC() {
        return this.nivelC;
    }
    getNivelD() {
        return this.nivelD;
    }
    getLaser() {
        return this.laser;
    }
    liberarLaser() {
        this.laser = null;
    }
}