// Link del video explicativo: https://www.youtube.com/watch?v=dUlJIOihd3s
//tp4
//Alumno: Ruiz Arizcuren Juan Bautista
//Legajo:88526/4
let playerX;
let playerY;
let playerSpeed = 3;
let playerSize = 20;
let currentScore = 0; // Puntaje de la partida actual
let totalScore = 0; // Puntaje total
let obstacles = [];
let currentScreen = 1;
let gameStatus = "playing"; // Variable de estado del juego ("playing", "win", "lose")
let instructionScreen = true; // Variable para mostrar la pantalla de instrucciones
let restartButton; // Botón de reinicio

const numRows = 5; // Número de filas de obstáculos
const rowSpacing = 100; // Espaciado entre las filas de obstáculos

function setup() {
  createCanvas(400, 600);
  playerX = width / 2;
  playerY = 0;
  restartButton = createButton("Reiniciar");
  restartButton.position(width / 2 - 50, height / 2 + 50);
  restartButton.mousePressed(restartGame);
  restartButton.hide(); // Oculta el botón al inicio
}

function draw() {
  background(12, 235, 245);

  // Pantalla de instrucciones
  if (instructionScreen) {
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text ("PARACHUTE", width / 2, height / 2 - 150);
    textSize(14);
    text("Instrucciones:", width / 2, height / 2 - 130);
    fill (255,3,24);
    text("Usa las flechas izquierda y derecha para mover al jugador", width / 2, height / 2 - 110);
    text("Aterriza para no perder los puntos", width / 2, height / 2 - 90);
    text("Presiona cualquier tecla para comenzar", width / 2, height / 2 - 70);
    fill (35,3,255);
    text("Ruiz Arizcuren Juan Bautista", width / 2, height / 2 + 120);
    text("Legajo 88526/4 ", width / 2, height / 2 + 140);
    if (keyIsPressed) {
      instructionScreen = false;
    }
  } else {
    if (currentScreen === 1 || currentScreen === 2 || currentScreen === 3) {
      // Actualiza los puntos en función de los frames transcurridos
      currentScore = currentScore + 1;

      // Pantallas 1, 2 y 3: caída y obstáculos
      playerY += playerSpeed;
      if (playerY > height) {
        currentScreen++;
        playerY = 0;
      }

      // Genera obstáculos en las filas horizontales
      if (frameCount % 60 === 0) {
        let row = int(random(numRows)); // Selecciona una fila aleatoria
        let obstacleX = random(width - playerSize);
        let obstacleY = (row + 1) * rowSpacing - 20; // Posición Y en la fila seleccionada
        let obstacleSpeed = random(1, 3);
        obstacles.push({ x: width, y: obstacleY, w: random(20, 60), h: random(20, 60), speed: obstacleSpeed });
      }

      // Mueve y muestra los obstáculos
      for (let i = obstacles.length - 1; i >= 0; i--) {
        let obstacle = obstacles[i];
        obstacle.x -= obstacle.speed;
        fill(12, 245, 21);
        rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);

        // Detecta colisiones
        if (
          playerX + playerSize > obstacle.x &&
          playerX < obstacle.x + obstacle.w &&
          playerY + playerSize > obstacle.y &&
          playerY < obstacle.y + obstacle.h
        ) {
          // Colisión, el juego termina con derrota
          gameStatus = "lose";
          restartButton.show(); // Muestra el botón de reinicio
          noLoop();
        }

        // Elimina los obstáculos que salen de la pantalla
        if (obstacle.x + obstacle.w < 0) {
          obstacles.splice(i, 1);
        }
      }
    } else if (currentScreen === 4) {
      // Pantalla 4: aterrizar en una zona segura
      playerY += playerSpeed;
      fill(0, 255, 0);
      rect(width / 2 - 40, height - 40, 80, 20);

      // Verifica si el jugador está fuera de la zona segura
      if (playerY >= height - playerSize - 20) {
        // El jugador ha caído fuera de la zona segura, el juego termina con derrota
        gameStatus = "lose";
        restartButton.show(); // Muestra el botón de reinicio
        noLoop();
      }

      // Detén al jugador cuando aterrice en la zona segura
      if (playerY >= height - playerSize - 20 && playerX >= width / 2 - 40 && playerX <= width / 2 + 40) {
        // El jugador ha aterrizado en la zona segura, gana el juego
        gameStatus = "win";
        totalScore += currentScore; // Suma el puntaje de la partida actual al puntaje total
        restartButton.show(); // Muestra el botón de reinicio
        noLoop();
      }
    }

    // Dibuja al jugador
    fill(0, 0, 255);
    ellipse(playerX, playerY, playerSize, playerSize);

    // Dibuja el mensaje de acuerdo a si ganás o perdés
    textSize(32);
    if (gameStatus === "win") {
      fill(0, 255, 0);
      text("¡Ganaste!", width / 2 - 100, height / 2);
    } else if (gameStatus === "lose") {
      fill(255, 0, 0);
      text("Game Over", width / 2 - 100, height / 2);
      // Reinicia el puntaje de la partida actual cuando el jugador pierde
      currentScore = 0;
    }

    // Dibuja el puntaje
    textSize(16);
    fill(0);
    text(`Puntos de partida: ${currentScore}`, 80, 20);
    text(`Puntos totales: ${totalScore}`, 70, 40);
  }
}

function keyPressed() {
  const stepSize = 15; // Ajusta la cantidad de espacios que mueve al jugador
  if (keyCode === LEFT_ARROW && playerX > 0) {
    playerX -= stepSize; // Mueve hacia la izquierda
  } else if (keyCode === RIGHT_ARROW && playerX < width - playerSize) {
    playerX += stepSize; // Mueve hacia la derecha
  }
}

function restartGame() {
  //para reiniciar el juego
  currentScreen = 1;
  playerY = 0;
  obstacles = [];
  gameStatus = "playing";
  currentScore = 0; // Reinicia el puntaje de la partida actual

  if (gameStatus === "lose") {
    // Si el jugador pierde, reinicia el puntaje total
    totalScore = 0;
  }

  restartButton.hide(); // Oculta el botón de reinicio
  loop();
}
