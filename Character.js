class Character {
    constructor(positionX, positionY, col, fil, vida, damage) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.col = col;
        this.fil = fil;
        this.vida = vida;
        this.inventario = [];
        this.imageCharacter = loadImage("./image/Hero.png");
        this.damage = damage;
        //img = loadImage('assets/laDefense.jpg');
    }

    getInventario() {
        return this.inventario;
    }

    getArma() {
        if (this.validarLaser()) {
            return this.inventario[0];
        }
        return null;
    }

    characterDraw() {
        fill(0, 0, 255);
        //ellipse(this.positionX, this.positionY, 50, 50);
        imageMode(CENTER);
        image(this.imageCharacter, this.positionX, this.positionY, 100, 100);
        //console.log(this.validarLaser);
        if (this.validarLaser()) {
            fill(255);
            circle(this.positionX, this.positionY, 20);
            this.inventario[0].mostrar();
        }
    }

    recalcularPosPj(key, nivel) {
        switch (key) {
            case 'a': //Izquierda
                if (this.fil > 0 && nivel[this.col][this.fil - 1] != 1 && nivel[this.col][this.fil - 1] != 4) {
                    this.fil = this.fil - 1;
                }
                break;
            case 'd': //Derecha
                if (this.fil < 7 && nivel[this.col][this.fil + 1] != 1 && nivel[this.col][this.fil + 1] != 4) {
                    this.fil = this.fil + 1;
                }

                break;
            case 'w': //Arriba
                if (this.col > 0 && nivel[this.col - 1][this.fil] != 1 && nivel[this.col - 1][this.fil] != 4) {
                    this.col = this.col - 1;
                }
                break;
            case 's': //Abajo
                if (this.col < 7 && nivel[this.col + 1][this.fil] != 1 && nivel[this.col + 1][this.fil] != 4) {
                    console.log(nivel[this.col][this.fil]);
                    this.col = this.col + 1;
                }
                break;
            case 'z': //Talk
                if (nivel[this.col + 1][this.fil] == 4) {
                    alert("Toma el arma y recuerda que solo puedes disparar a tu derecha");
                }
                break;
        }
        if (nivel[this.col][this.fil] == 3) {
            this.fil = 0;
            this.col = 0;
            nivelActual += 1;
            this.tengoArma = false;

        }
        this.positionX = (this.fil * 100) + 50;
        this.positionY = (this.col * 100) + 50;
        if (this.validarLaser()) {
            this.inventario[0].actualizarPos(this.positionX, this.positionY);
        }
    }

    validarLaser() {
        let hayLaser = false;
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i] instanceof Arma) {
                hayLaser = true;
            }
        }
        return hayLaser;
    }

    disparar(nivel) {
        if (this.validarLaser()) {
            this.inventario[0].disparar();
        } else {
            console.log("piu");
        }
    }

    agregarAlInventario(nuevoItem) {
        this.inventario.push(nuevoItem);
    }

    getPositionX() {
        return this.positionX;
    }

    setPositionX(positionX) {
        this.positionX = positionX;
    }

    getPositionY() {
        return this.positionY;
    }

    setPositionY(positionY) {
        this.positionY = positionY;
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

    getVida() {
        return this.vida;
    }

    setVida(vida) {
        this.vida = vida;
    }

    getDamage() {
        return this.damage;
    }

    setDamage(damage) {
        this.damage = damage;
    }


}