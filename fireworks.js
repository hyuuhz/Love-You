const canvas =
document.getElementById(
"fireworksCanvas"
);

const ctx =
canvas.getContext("2d");

function resizeCanvas(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);

const fireworks = [];

class Particle{

constructor(x,y,color){

this.x = x;
this.y = y;

this.color = color;

this.radius =
Math.random()*3+1;

this.speedX =
(Math.random()-0.5)*10;

this.speedY =
(Math.random()-0.5)*10;

this.life = 100;

}

update(){

this.x += this.speedX;

this.y += this.speedY;

this.speedY += 0.05;

this.life--;

}

draw(){

ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.radius,
0,
Math.PI*2
);

ctx.fillStyle =
this.color;

ctx.fill();

}

}

function createFirework(){

const x =
Math.random()*canvas.width;

const y =
Math.random()*
(canvas.height/2);

for(let i=0;i<120;i++){

fireworks.push(

new Particle(

x,
y,

[
"#ffd166",
"#ffe29a",
"#ffffff"
][Math.floor(
Math.random()*3
)]

)

);

}

}

setInterval(

createFirework,

1800

);

function animate(){

ctx.clearRect(

0,
0,
canvas.width,
canvas.height

);

fireworks.forEach(

(p,index)=>{

p.update();

p.draw();

if(p.life <= 0){

fireworks.splice(
index,
1
);

}

}

);

requestAnimationFrame(
animate
);

}

animate();
