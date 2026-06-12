/* ===================================== */
/* ELEMENTOS */
/* ===================================== */

const lastMessageBtn =
document.getElementById(
"lastMessageBtn"
);

const lastScreen =
document.getElementById(
"lastScreen"
);

const finalSection =
document.getElementById(
"final"
);

/* ===================================== */
/* HEART EXPLOSION */
/* ===================================== */

function createHeartExplosion(){

for(let i = 0; i < 80; i++){

const heart =
document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";

heart.style.left = "50%";
heart.style.top = "50%";

heart.style.pointerEvents = "none";

heart.style.zIndex = "99999";

heart.style.fontSize =
(Math.random()*25 + 15) + "px";

document.body.appendChild(
heart
);

const angle =
Math.random() * Math.PI * 2;

const distance =
Math.random() * 600 + 100;

const x =
Math.cos(angle) * distance;

const y =
Math.sin(angle) * distance;

heart.animate(

[
{
transform:
"translate(-50%,-50%) scale(1)",
opacity:1
},
{
transform:
`translate(
calc(-50% + ${x}px),
calc(-50% + ${y}px)
)
scale(.2)`,

opacity:0
}
],

{
duration:2500,
easing:"ease-out"
}

);

setTimeout(()=>{

heart.remove();

},2500);

}

}

/* ===================================== */
/* GOLDEN FLASH */
/* ===================================== */

function createGoldenFlash(){

const flash =
document.createElement("div");

flash.style.position = "fixed";

flash.style.top = "0";
flash.style.left = "0";

flash.style.width = "100%";
flash.style.height = "100%";

flash.style.background =

`
radial-gradient(
circle,
rgba(255,209,102,.9),
rgba(255,209,102,0)
)
`;

flash.style.zIndex = "99998";

flash.style.pointerEvents =
"none";

flash.style.opacity = "0";

document.body.appendChild(
flash
);

flash.animate(

[
{opacity:0},
{opacity:1},
{opacity:0}
],

{
duration:1800
}

);

setTimeout(()=>{

flash.remove();

},1800);

}

/* ===================================== */
/* FINAL TRANSITION */
/* ===================================== */

function showLastScreen(){

lastScreen.style.display =
"flex";

lastScreen.style.opacity =
"0";

setTimeout(()=>{

lastScreen.style.transition =
"2s";

lastScreen.style.opacity =
"1";

},100);

}

/* ===================================== */
/* CINEMATIC FADE */
/* ===================================== */

function cinematicFade(){

const overlay =
document.createElement("div");

overlay.style.position =
"fixed";

overlay.style.top = "0";
overlay.style.left = "0";

overlay.style.width = "100%";
overlay.style.height = "100%";

overlay.style.background =
"black";

overlay.style.opacity = "0";

overlay.style.zIndex =
"99997";

document.body.appendChild(
overlay
);

overlay.animate(

[
{opacity:0},
{opacity:1}
],

{
duration:2000,
fill:"forwards"
}

);

setTimeout(()=>{

overlay.remove();

showLastScreen();

},2000);

}

/* ===================================== */
/* CONFETTI HEARTS */
/* ===================================== */

function floatingHearts(){

for(let i = 0; i < 40; i++){

const heart =
document.createElement("div");

heart.innerHTML = "💖";

heart.style.position =
"fixed";

heart.style.bottom =
"-50px";

heart.style.left =
Math.random()*100+"vw";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.zIndex =
99999;

heart.style.pointerEvents =
"none";

document.body.appendChild(
heart
);

heart.animate(

[
{
transform:
"translateY(0)",
opacity:1
},

{
transform:
`translateY(-120vh)`,

opacity:0
}
],

{
duration:
Math.random()*4000+4000,

easing:"linear"
}

);

setTimeout(()=>{

heart.remove();

},8000);

}

}

/* ===================================== */
/* BUTTON CLICK */
/* ===================================== */

lastMessageBtn.addEventListener(
"click",

()=>{

createGoldenFlash();

createHeartExplosion();

floatingHearts();

/* esperar emoção */

setTimeout(()=>{

cinematicFade();

},3000);

});
