/* ===================================== */
/* PETALS */
/* ===================================== */

const petalsContainer =
document.getElementById(
"petalsContainer"
);

let petalsEnabled = false;

/* ===================================== */
/* CREATE PETAL */
/* ===================================== */

function createPetal(){

if(!petalsEnabled) return;

const petal =
document.createElement("div");

petal.classList.add(
"petal"
);

petal.innerHTML = "🌹";

const size =
Math.random() * 18 + 16;

petal.style.fontSize =
size + "px";

petal.style.left =
Math.random() * 100 + "vw";

const duration =
Math.random() * 10 + 8;

petal.style.animationDuration =
duration + "s";

const rotation =
Math.random() * 360;

petal.style.transform =
`rotate(${rotation}deg)`;

petalsContainer.appendChild(
petal
);

setTimeout(()=>{

petal.remove();

}, duration * 1000);

}

/* ===================================== */
/* START PETALS */
/* ===================================== */

function startPetals(){

petalsEnabled = true;

}

/* ===================================== */
/* STOP PETALS */
/* ===================================== */

function stopPetals(){

petalsEnabled = false;

}

/* ===================================== */
/* LOOP */
/* ===================================== */

setInterval(()=>{

createPetal();

},400);

/* ===================================== */
/* AUTO START DURING LETTER */
/* ===================================== */

const envelope =
document.getElementById(
"envelope"
);

if(envelope){

envelope.addEventListener(
"click",

()=>{

setTimeout(()=>{

startPetals();

},1500);

});

}
