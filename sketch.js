// let nivelA = [
//     [0, 0, 0, 1, 0, 1, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 0, 0, 1, 0],
//     [0, 0, 1, 0, 0, 0, 1, 0],
//     [0, 1, 1, 0, 1, 0, 0, 0],
//     [4, 0, 1, 0, 0, 0, 0, 3],
// ];

// let nivelB = [
//     [0, 0, 0, 0, 0, 1, 0, 3],
//     [1, 0, 0, 1, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 1, 0, 1],
//     [0, 0, 0, 1, 0, 0, 0, 1],
//     [0, 1, 4, 1, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0],
// ];

// let nivelC = [
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 0, 1, 0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 1, 1, 4, 1, 0, 0, 0],
//     [0, 0, 1, 1, 0, 1, 0, 0],
//     [0, 1, 1, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0, 3, 0, 0],
// ];

// let nivelD = [
//     [0, 0, 0, 0, 1, 0, 0, 0],
//     [1, 0, 1, 0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 1, 0, 0, 1],
//     [0, 1, 1, 0, 0, 0, 0, 3],
//     [0, 0, 1, 0, 1, 0, 1, 0],
//     [0, 1, 1, 0, 0, 1, 0, 0],
//     [0, 0, 1, 4, 1, 1, 0, 1],
// ];

//movimiento entre los niveles  
let nivelActual = 0;
//let niveles = [nivelA, nivelB, nivelC, nivelD];
let fil = 8; //Tamaño del mapa en el eje Y?
let colu = 8; //Tamaño del mapa en el eje X?

//Protagonista
let pjCol = 0;
let pjFil = 0;
let pjY = (pjCol * 100) + 50;
let pjX = (pjFil * 100) + 50;

//Minotaur
let minoCol = [];
let minoFil = [];
minoCol[0] = 2;
minoFil[0] = 6;
minoCol[1] = 6;
minoFil[1] = 7;

//Aliado
let allyCol = 7;
let allyFil = 0;


let zelda; //Declarar el objeto
let minotaur = []; //Primer Enemigo
let link = []; //Declaraar el aliado
let curacion = []; //Objeto
let mapa;


let visualizarLaser = true;


function setup() {
    createCanvas(100 * fil, 100 * colu + 100);
    zelda = new Character(50, 50, 0, 0, 1);
    mapa = new Map();
    minotaur[0] = new Minotaur(minoCol[0], minoFil[0]);
    minotaur[1] = new Minotaur(minoCol[1], minoFil[1]);
    link[0] = new Ally(7, 0);
    link[1] = new Ally(4, 2);
    link[2] = new Ally(4, 3);
    link[3] = new Ally(7, 3);
    for (let index = 0; index < 2; index++) {
        curacion.push(new Life(8, 8));
        curacion.push(new Life(3, 4));
    }

}

//los niveles pintados a-d
function draw() {
    background(220);
    switch (nivelActual) {
        case 0:
            //console.log(mapa.getNivelA());
            mapa.pintarNivel(mapa.getNivelA());
            text("Vida: " + zelda.getVida(), 50, 850);
            minotaur[0].characterDraw();
            minotaur[1].characterDraw();

            validarCapturaArma();

            link[0].characterDraw();
            if (zelda.getVida() == 0) {
                nivelActual = 5;
            }
            curacion[0].characterDraw();
            curacion[1].characterDraw();
            break;
        case 1:
            mapa.pintarNivel(mapa.getNivelB());
            link[1].characterDraw();
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
    //ellipse(pjX,pjY,50,50);
    zelda.characterDraw();

}


// function pintarNivel(nivel) {
//     for (let fila = 0; fila < fil; fila++) {
//         for (let col = 0; col < colu; col++) {
//             if (nivel[fila][col] == 0 || nivel[fila][col] == 4) {
//                 fill(255);
//             } else if (nivel[fila][col] == 3) {
//                 fill(0, 255, 255);
//             } else {
//                 fill(1);
//             }
//             rect(col * 100, fila * 100, 100, 100);
//         }
//     }
//     laser.mostrar();
// }


//movimiento de nuestro personaje 
function keyPressed() {
    switch (nivelActual) {
        case 0:
            switch (key) {
                case 'a':
                case 's':
                case 'd':
                case 'w':
                    zelda.recalcularPosPj(key, mapa.getNivelA());
                    break;
                case 'x':
                    mapa.getLaser().disparar();
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
            zelda.recalcularPosPj(key, mapa.getNivelB());
            break;
        case 2:
            zelda.recalcularPosPj(key, mapa.getNivelC());
            break;
        case 3:
            zelda.recalcularPosPj(key, mapa.getNivelD());
            break;
    }
}

function validarHerirEnemigo(enemigos) {
    let laserRef = pj.getLaser();
    if (laserRef != null) {
        let balas = laserRef.getMunicion();
        balas.forEach(bala => {
            if (dist(enemigos.getPositionX(), enemigos.getPositionY(), bala.getPositionX(), bala.getPositionY()) > 10) {
                enemigos.herir(5);
            }
        });
    }
}

function validarCapturaArma() {
    if (dist(mapa.getLaser().getPositionX(), mapa.getLaser().getPositionY(), zelda.getPositionX(), zelda.getPositionY()) < 50) {
        zelda.agregarAlInventario(mapa.getLaser());
        visualizarLaser = false;
    }
}