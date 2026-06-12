/* ===================================== */
/* PARTICLES CANVAS */
/* ===================================== */

const particlesCanvas =
document.getElementById("particlesCanvas");

const particlesCtx =
particlesCanvas.getContext("2d");

function resizeParticles(){

particlesCanvas.width =
window.innerWidth;

particlesCanvas.height =
window.innerHeight;

}

resizeParticles();

window.addEventListener(
"resize",
resizeParticles
);

/* ===================================== */
/* CONFIG */
/* ===================================== */

const particles = [];

const PARTICLE_COUNT = 120;

/* ===================================== */
/* PARTICLE CLASS */
/* ===================================== */

class Particle{

constructor(){

this.reset();

}

reset(){

this.x =
Math.random() *
particlesCanvas.width;

this.y =
Math.random() *
particlesCanvas.height;

this.radius =
Math.random() * 3 + 1;

this.speedX =
(Math.random() - 0.5) * 0.2;

this.speedY =
(Math.random() - 0.5) * 0.2;

this.opacity =
Math.random() * 0.6;

this.glow =
Math.random() * 10 + 5;

}

update(){

this.x += this.speedX;

this.y += this.speedY;

if(this.x < -50)
this.x =
particlesCanvas.width + 50;

if(this.x >
particlesCanvas.width + 50)
this.x = -50;

if(this.y < -50)
this.y =
particlesCanvas.height + 50;

if(this.y >
particlesCanvas.height + 50)
this.y = -50;

}

draw(){

particlesCtx.beginPath();

particlesCtx.arc(
this.x,
this.y,
this.radius,
0,
Math.PI * 2
);

particlesCtx.shadowBlur =
this.glow;

particlesCtx.shadowColor =
"#ffd166";

particlesCtx.fillStyle =
`rgba(
255,
209,
102,
${this.opacity}
)`;

particlesCtx.fill();

}

}

/* ===================================== */
/* CREATE PARTICLES */
/* ===================================== */

for(
let i = 0;
i < PARTICLE_COUNT;
i++
){

particles.push(
new Particle()
);

}

/* ===================================== */
/* CONNECT PARTICLES */
/* ===================================== */

function drawLinks(){

for(
let i = 0;
i < particles.length;
i++
){

for(
let j = i + 1;
j < particles.length;
j++
){

const dx =
particles[i].x -
particles[j].x;

const dy =
particles[i].y -
particles[j].y;

const distance =
Math.sqrt(
dx * dx +
dy * dy
);

if(distance < 140){

particlesCtx.beginPath();

particlesCtx.moveTo(
particles[i].x,
particles[i].y
);

particlesCtx.lineTo(
particles[j].x,
particles[j].y
);

particlesCtx.strokeStyle =
`rgba(
255,
209,
102,
${0.05 - distance / 4000}
)`;

particlesCtx.stroke();

}

}

}

}

/* ===================================== */
/* CURSOR INTERACTION */
/* ===================================== */

let mouse = {

x:null,
y:null

};

window.addEventListener(
"mousemove",

e=>{

mouse.x = e.clientX;
mouse.y = e.clientY;

}
);

function attractParticles(){

if(mouse.x === null)
return;

particles.forEach(p=>{

const dx =
mouse.x - p.x;

const dy =
mouse.y - p.y;

const distance =
Math.sqrt(
dx * dx +
dy * dy
);

if(distance < 120){

p.x -= dx * 0.002;
p.y -= dy * 0.002;

}

});

}

/* ===================================== */
/* GOLDEN FOG */
/* ===================================== */

function drawGoldenFog(){

const gradient =

particlesCtx.createRadialGradient(

particlesCanvas.width / 2,
particlesCanvas.height / 2,
100,

particlesCanvas.width / 2,
particlesCanvas.height / 2,
900

);

gradient.addColorStop(
0,
"rgba(255,209,102,.03)"
);

gradient.addColorStop(
1,
"rgba(255,209,102,0)"
);

particlesCtx.fillStyle =
gradient;

particlesCtx.fillRect(
0,
0,
particlesCanvas.width,
particlesCanvas.height
);

}

/* ===================================== */
/* ANIMATION */
/* ===================================== */

function animateParticles(){

particlesCtx.clearRect(

0,
0,
particlesCanvas.width,
particlesCanvas.height

);

drawGoldenFog();

particles.forEach(p=>{

p.update();
p.draw();

});

drawLinks();

attractParticles();

requestAnimationFrame(
animateParticles
);

}

animateParticles();
