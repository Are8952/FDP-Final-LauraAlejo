//movimiento entre los niveles  
let nivelActual = 0;
//let niveles = [nivelA, nivelB, nivelC, nivelD];
let fil = 8; //Tamaño del mapa en el eje Y?
let colu = 8; //Tamaño del mapa en el eje X?


//Minotaur
let minoCol = [];
let minoFil = [];
minoCol[1] = 1;
minoFil[1] = 4;
minoCol[0] = 4;
minoFil[0] = 4;

//Medusa
let meduCol = [];
let meduFil = [];
meduCol[1] = 0;
meduFil[1] = 6;
meduCol[0] = 3;
meduFil[0] = 5;

//Aracne
let aracCol = [];
let aracFil = [];
aracCol[0] = 2;
aracFil[0] = 6;
aracCol[1] = 5;
aracFil[1] = 6;

//Marino
let charCol = [];
let charFil = [];
charCol[0] = 2;
charFil[0] = 3;
charCol[1] = 5;
charFil[1] = 7;

//Aliado
let allyCol = 7;
let allyFil = 0;


let zelda; //Declarar el objeto
let minotaur = []; //Primer Enemigo
let link = []; //Declaraar el aliado
let curacion = []; //Objeto
let curacion2 = []; //Objeto 2
let curacion3 = []; //Objeto 3
let curacion4 = []; //Objeto 4
let medusa = []; //Segundo Enemigo
let aracne = []; //Tercer Enemigo
let charybdis = []; //Cuarto Enemigo
let mejora = [];
// let mejora2;
// let mejora3;
let mapa;

let backgroundMap = [];

function setup() {
    createCanvas(100 * fil, 100 * colu + 100);
    zelda = new Character(50, 50 + (100 * 1), 1, 0, 1, 10);
    //positionX, positionY, col, fil, vida
    mapa = new Map(nivelActual);
    for (let index = 0; index < 2; index++) {
        minotaur[index] = new Minotaur(minoCol[index], minoFil[index]);
    }

    for (let index = 0; index < 2; index++) {
        medusa[index] = new Medusa(meduCol[index], meduFil[index]);
    }

    for (let index = 0; index < 2; index++) {
        aracne[index] = new Aracne(aracCol[index], aracFil[index]);
    }

    for (let index = 0; index < 2; index++) {
        charybdis[index] = new Charybdis(charCol[index], charFil[index]);
    }

    link[0] = new Ally(7, 0);
    link[1] = new Ally(4, 2);
    link[2] = new Ally(4, 3);
    link[3] = new Ally(7, 0);
    for (let index = 0; index < 2; index++) {
        curacion.push(new Life(8, 8));
        curacion.push(new Life(7, 7));
    }

    for (let index = 0; index < 2; index++) {
        curacion2.push(new Life(8, 8));
        curacion2.push(new Life(2, 4));
    }

    for (let index = 0; index < 2; index++) {
        curacion3.push(new Life(8, 8));
        curacion3.push(new Life(5, 1));
    }

    for (let index = 0; index < 2; index++) {
        curacion4.push(new Life(8, 8));
        curacion4.push(new Life(2, 3));
    }

    mejora[0] = new Mejora(5, 3);
    mejora[1] = new Mejora(2, 2);
    mejora[2] = new Mejora(4, 5);
    // mejora3 = new Mejora();

    backgroundMap[0] = loadImage("Image/background1.JPG");
    backgroundMap[1] = loadImage("Image/background2.JPG");
    backgroundMap[2] = loadImage("Image/background3.JPG");
    backgroundMap[3] = loadImage("Image/background4.JPG");

    nivelActual = 0;

}

//los niveles pintados a-d
function draw() {
    background(0);
    switch (nivelActual) {
        case 0:
            imageMode(CORNER);
            image(backgroundMap[0], 0, 0, 800, 800);
            fill(255);
            textSize(20);
            text("Vida: " + zelda.getVida(), 50, 850);
            text("Daño: " + zelda.getDamage(), 650, 850);
            textSize(15);
            minotaur.forEach(minotauro => {
                minotauro.characterDraw();
            });
            validarCapturaArma();
            validarHerirEnemigo();
            link[0].characterDraw();
            if (zelda.getVida() == 0) {
                nivelActual = 5;
            }
            curacion.forEach(element => {
                element.characterDraw();
            });
            break;
        case 1:
            imageMode(CORNER);
            image(backgroundMap[1], 0, 0, 800, 800);
            validarCapturaArma();
            validarMejoraArma();
            link[1].characterDraw();
            mejora[0].mostrar(nivelActual);
            //MEDUSA
            validarHerirEnemigo();
            medusa.forEach(element => {
                element.characterDraw();
                //element.mover();
            });
            fill(255);
            textSize(20);
            text("Vida: " + zelda.getVida(), 50, 850);
            text("Daño: " + zelda.getDamage(), 650, 850);
            textSize(15);
            if (zelda.getVida() == 0) {
                nivelActual = 5;
            }
            curacion2.forEach(element => {
                element.characterDraw();
            });
            break;
        case 2:
            imageMode(CORNER);
            image(backgroundMap[2], 0, 0, 800, 800);
            link[2].characterDraw();
            validarCapturaArma();
            validarHerirEnemigo();
            mejora[1].mostrar(nivelActual);
            validarMejoraArma();
            aracne.forEach(element => {
                element.characterDraw();
                //element.mover();
            });
            if (zelda.getVida() == 0) {
                nivelActual = 5;
            }
            curacion3.forEach(element => {
                element.characterDraw();
            });
            fill(255);
            textSize(20);
            text("Vida: " + zelda.getVida(), 50, 850);
            text("Daño: " + zelda.getDamage(), 650, 850);
            textSize(15);
            break;
        case 3:
            imageMode(CORNER);
            image(backgroundMap[3], 0, 0, 800, 800);
            link[3].characterDraw();
            validarCapturaArma();
            validarHerirEnemigo();
            mejora[2].mostrar(nivelActual);
            validarMejoraArma();
            charybdis.forEach(element => {
                element.characterDraw();
                element.mover();
            });
            if (zelda.getVida() <= 0) {
                nivelActual = 5;
            }
            curacion4.forEach(element => {
                element.characterDraw();
            });
            for (let index = 0; index < charybdis.length; index++) {
                let distanciaProtagonistaVscharybdis = dist(charybdis[index].getCol(),
                    charybdis[index].getFil(), zelda.getCol(), zelda.getFil());
                if (distanciaProtagonistaVscharybdis == 0) {
                    zelda.setVida(zelda.getVida() - 1);
                }
            }
            fill(255);
            textSize(20);
            text("Vida: " + zelda.getVida(), 50, 850);
            text("Daño: " + zelda.getDamage(), 650, 850);
            textSize(15);
            break;
        case 4:
            fill(0, 0, 0);
            textSize(100);
            textAlign(CENTER);
            background(0, 100, 150);
            text("GANASTE", width / 2, height / 2);
            break;
        case 5:
            fill(0, 0, 0);
            textSize(100);
            textAlign(CENTER);
            background(255, 0, 0);
            text("PERDISTE", width / 2, height / 2);
            break;
    }
    zelda.characterDraw();

}

//movimiento de nuestro personaje 
function keyPressed() {
    switch (nivelActual) {
        case 0:
            switch (key) {
                case 'a':
                case 's':
                case 'd':
                case 'w':
                case 'z':
                    zelda.recalcularPosPj(key, mapa.getNivelA(), nivelActual);
                    break;
                case 'x':
                    zelda.disparar();
                    break;
            }
            for (let index = 0; index < minotaur.length; index++) {
                let distanciaProtagonistaVsMinotaur = dist(minotaur[index].getCol(),
                    minotaur[index].getFil(), zelda.getCol(), zelda.getFil());
                if (distanciaProtagonistaVsMinotaur == 0) {
                    zelda.setVida(zelda.getVida() - 1);
                }
            }
            for (let index = 0; index < curacion.length; index++) {
                let distanciaProtagonistaVsHeal = dist(curacion[index].getCol(),
                    curacion[index].getFil(), zelda.getCol(), zelda.getFil());
                if (distanciaProtagonistaVsHeal == 0) {
                    zelda.setVida(zelda.getVida() + 0.5);
                    curacion.splice(index, 1);
                }
            }
            break;
        case 1:
            switch (key) {
                case 'a':
                case 's':
                case 'd':
                case 'w':
                case 'z':
                    zelda.recalcularPosPj(key, mapa.getNivelB(), nivelActual);
                    break;
                case 'x':
                    zelda.disparar();
                    break;
            }
            for (let index = 0; index < medusa.length; index++) {
                let distanciaProtagonistaVsMedusa = dist(medusa[index].getCol(),
                    medusa[index].getFil(), zelda.getCol(), zelda.getFil());
                if (distanciaProtagonistaVsMedusa == 0) {
                    zelda.setVida(zelda.getVida() - 1);
                }
            }
            for (let index = 0; index < curacion2.length; index++) {
                let distanciaProtagonistaVsHeal = dist(curacion2[index].getCol(),
                    curacion2[index].getFil(), zelda.getCol(), zelda.getFil());
                if (distanciaProtagonistaVsHeal == 0) {
                    zelda.setVida(zelda.getVida() + 0.5);
                    curacion2.splice(index, 1);
                }
            }
            break;
        case 2:
            switch (key) {
                case 'a':
                case 's':
                case 'd':
                case 'w':
                case 'z':
                    zelda.recalcularPosPj(key, mapa.getNivelC(), nivelActual);
                    break;
                case 'x':
                    zelda.disparar();
                    break;
            }
            for (let index = 0; index < aracne.length; index++) {
                let distanciaProtagonistaVsAracne = dist(aracne[index].getCol(),
                    aracne[index].getFil(), zelda.getCol(), zelda.getFil());
                if (distanciaProtagonistaVsAracne == 0) {
                    zelda.setVida(zelda.getVida() - 1);
                }
            }
            for (let index = 0; index < curacion3.length; index++) {
                let distanciaProtagonistaVsHeal = dist(curacion3[index].getCol(),
                    curacion3[index].getFil(), zelda.getCol(), zelda.getFil());
                if (distanciaProtagonistaVsHeal == 0) {
                    zelda.setVida(zelda.getVida() + 0.5);
                    curacion3.splice(index, 1);
                }
            }
            break;
        case 3:
            switch (key) {
                case 'a':
                case 's':
                case 'd':
                case 'w':
                case 'z':
                    zelda.recalcularPosPj(key, mapa.getNivelD(), nivelActual);
                    break;
                case 'x':
                    zelda.disparar();
                    break;
            }

            for (let index = 0; index < curacion4.length; index++) {
                let distanciaProtagonistaVsHeal = dist(curacion4[index].getCol(),
                    curacion4[index].getFil(), zelda.getCol(), zelda.getFil());
                if (distanciaProtagonistaVsHeal == 0) {
                    zelda.setVida(zelda.getVida() + 0.5);
                    curacion4.splice(index, 1);
                }
            }
            break;
    }
}

function validarHerirEnemigo() {
    let laserRef;

    laserRef = zelda.getArma();

    if (laserRef !== null) {
        let balas = laserRef.getMunicion();
        balas.forEach(bala => {
            switch (nivelActual) {
                case 0:
                    minotaur.forEach(element => {
                        if (bala.getActiva() && dist(element.getPositionX(), element.getPositionY(), bala.getPositionX(), bala.getPositionY()) < 20) {
                            element.herir(zelda.getDamage());
                            bala.desactivar();
                            if (element.getVida() == 0) {
                                minotaur.splice(element, 1);
                            }
                        }
                    });
                    break;
                case 1:
                    medusa.forEach(element => {
                        if (bala.getActiva() && dist(element.getPositionX(), element.getPositionY(), bala.getPositionX(), bala.getPositionY()) < 20) {
                            element.herir(zelda.getDamage());
                            bala.desactivar();
                            if (element.getVida() == 0) {
                                medusa.splice(element, 1);
                            }
                        }
                    });
                    break;
                case 2:
                    aracne.forEach(element => {
                        if (bala.getActiva() && dist(element.getPositionX(), element.getPositionY(), bala.getPositionX(), bala.getPositionY()) < 20) {
                            element.herir(zelda.getDamage());
                            bala.desactivar();
                            if (element.getVida() == 0) {
                                aracne.splice(element, 1);
                            }
                        }
                    });
                    break;
                case 3:
                    charybdis.forEach(element => {
                        if (bala.getActiva() && dist(element.getPositionX(), element.getPositionY(), bala.getPositionX(), bala.getPositionY()) < 20) {
                            element.herir(zelda.getDamage());
                            bala.desactivar();
                            if (element.getVida() == 0) {
                                charybdis.splice(element, 1);
                            }
                        }
                    });
                    break;
            }
        });
    }
}

function validarCapturaArma() {
    if (mapa.getLaser() !== null) {
        if (dist(mapa.getLaser().getPositionX(), mapa.getLaser().getPositionY(), zelda.getPositionX(), zelda.getPositionY()) < 50) {
            zelda.agregarAlInventario(mapa.getLaser());
            mapa.liberarLaser();
        }
    }
}

function validarMejoraArma() {

    switch (nivelActual) {
        case 1:
            if (dist(mejora[0].getFil(), mejora[0].getCol(), zelda.getFil(), zelda.getCol()) <= 0) {
                zelda.setDamage(20);
                mejora[0].setFil(8);
                mejora[0].setCol(8);
                mejora[0].setPositionX(1000);
                mejora[0].setPositionY(1000);
            }
            break;
        case 2:
            if (dist(mejora[1].getFil(), mejora[1].getCol(), zelda.getFil(), zelda.getCol()) <= 0) {
                zelda.setDamage(50);
                mejora[1].setFil(8);
                mejora[1].setCol(8);
                mejora[1].setPositionX(1000);
                mejora[1].setPositionY(1000);
            }
            break;
        case 3:
            if (dist(mejora[2].getFil(), mejora[2].getCol(), zelda.getFil(), zelda.getCol()) <= 0) {
                zelda.setDamage(100);
                mejora[2].setFil(8);
                mejora[2].setCol(8);
                mejora[2].setPositionX(1000);
                mejora[2].setPositionY(1000);
            }
            break;
    }





}