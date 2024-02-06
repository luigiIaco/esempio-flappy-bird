var bird = document.querySelector(".bird");
var birdLeft = 50;
var birdBottom = 140;
var gravity = 2;
var spostamento = 2;
var ostacolo_left = 200;
function inizio() {
  function startGame() {
    birdBottom -= gravity;
    bird.style.position = "relative";
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
  }

  let timer = setInterval(startGame, 20);

  function creaOstacoli() {
    var ostacolo_sotto = document.createElement("div");
    var ostacolo_sopra = document.createElement("div");

    var recupero = document.querySelector(".sky");
    ostacolo_sotto.classList.add("osta_sotto");
    ostacolo_sopra.classList.add("osta_sopra");
    ostacolo_sotto.style.left = ostacolo_left + "px";

    recupero.appendChild(ostacolo_sotto);
    recupero.appendChild(ostacolo_sopra);
    ostacolo_left -= spostamento;
  }
  creaOstacoli();

  function moveOstacoli() {
    var tubo = document.querySelector(".osta_sotto");
    var tubo_due = document.querySelector(".osta_sopra");
    ostacolo_left -= spostamento;
    tubo.style.left = ostacolo_left + "px";
    tubo_due.style.left = ostacolo_left + "px";
    if (ostacolo_left < 0) {
      ostacolo_left = 350;
    }
    console.log(birdBottom);
    if (birdBottom > 182) {
      if (ostacolo_left < 80) {
        birdBottom = 182;
        bird.style.bottom = birdBottom + "px";
        clearInterval(timer);
        clearInterval(timer_due);
      }
      if (ostacolo_left == 80) {
        clearInterval(timer);
        clearInterval(timer_due);
      }
    }
    if (birdBottom < 100) {
      if (ostacolo_left < 80) {
        birdBottom = 100;
        bird.style.bottom = birdBottom + "px";
        clearInterval(timer);
        clearInterval(timer_due);
      }
      if (ostacolo_left == 80) {
        clearInterval(timer);
        clearInterval(timer_due);
      }
    }
  }
  let timer_due = setInterval(moveOstacoli, 20);

  window.addEventListener("keydown", (event) => {
    direction = event.code;
    if (direction === "Space") {
      birdBottom += 20;
    }
  });
}
