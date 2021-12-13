//movimiento entre los niveles  
let nivelActual = 0;
//let niveles = [nivelA, nivelB, nivelC, nivelD];
let fil = 8; //Tamaño del mapa en el eje Y?
let colu = 8; //Tamaño del mapa en el eje X?


//Minotaur
let minoCol = [];
let minoFil = [];
minoCol[1] = 6;
minoFil[1] = 7;
minoCol[0] = 3;
minoFil[0] = 6;

//Medusa
let meduCol = [];
let meduFil = [];
meduCol[0] = 0;
meduFil[0] = 6;
meduCol[1] = 2;
meduFil[1] = 6;

//Aliado
let allyCol = 7;
let allyFil = 0;


let zelda; //Declarar el objeto
let minotaur = []; //Primer Enemigo
let link = []; //Declaraar el aliado
let curacion = []; //Objeto
let medusa = []; //Segundo Enemigo
let mejora;
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

    link[0] = new Ally(7, 0);
    link[1] = new Ally(4, 2);
    link[2] = new Ally(4, 3);
    link[3] = new Ally(7, 3);
    for (let index = 0; index < 2; index++) {
        curacion.push(new Life(8, 8));
        curacion.push(new Life(3, 4));
    }

    mejora = new Mejora(5, 3);

    backgroundMap[0] = loadImage("./image/background1.jpg");
    backgroundMap[1] = loadImage("./image/Hero.png");;
    backgroundMap[2] = loadImage("./image/Hero.png");;
    backgroundMap[3] = loadImage("./image/Hero.png");;
    nivelActual = 0;

}

//los niveles pintados a-d
function draw() {
    background(220);
    switch (nivelActual) {
        case 0:
            imageMode(CORNER);
            image(backgroundMap[0], 0, 0, 800, 800);
            text("Vida: " + zelda.getVida(), 50, 850);
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
            mapa.pintarNivel(mapa.getNivelB(), nivelActual);
            validarCapturaArma();
            validarMejoraArma();
            link[1].characterDraw();
            mejora.mostrar();
            //MEDUSA
            validarHerirEnemigo();
            medusa.forEach(element => {
                element.characterDraw();
                //element.mover();
            });

            break;
        case 2:

            mapa.pintarNivel(mapa.getNivelC());
            link[2].characterDraw();
            break;
        case 3:

            mapa.pintarNivel(mapa.getNivelD());
            link[3].characterDraw();
            break;
        case 4:
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
                    zelda.recalcularPosPj(key, mapa.getNivelA());
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
                    zelda.recalcularPosPj(key, mapa.getNivelB());
                    break;
                case 'x':
                    zelda.disparar();
                    break;
            }
            break;
        case 2:
            zelda.recalcularPosPj(key, mapa.getNivelC());
            break;
        case 3:
            zelda.recalcularPosPj(key, mapa.getNivelD());
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
                    minotaur.forEach(minotauro => {
                        if (bala.getActiva() && dist(minotauro.getPositionX(), minotauro.getPositionY(), bala.getPositionX(), bala.getPositionY()) < 20) {
                            minotauro.herir(zelda.getDamage());
                            bala.desactivar();
                            if (minotauro.getVida() == 0) {
                                minotaur.splice(minotauro, 1);
                            }
                        }
                    });
                    break;
                case 1:
                    medusa.forEach(minotauro => {
                        if (bala.getActiva() && dist(minotauro.getPositionX(), minotauro.getPositionY(), bala.getPositionX(), bala.getPositionY()) < 20) {
                            minotauro.herir(zelda.getDamage());
                            bala.desactivar();
                            if (minotauro.getVida() == 0) {
                                medusa.splice(minotauro, 1);
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
    if (dist(mejora.getFil(), mejora.getCol(), zelda.getFil(), zelda.getCol()) <= 0) {
        zelda.setDamage(20);
        console.log(zelda.getDamage());
    }
}