/* ===================================== */
/* BALLOONS */
/* ===================================== */

const balloonsContainer =
document.getElementById(
"balloonsContainer"
);

const balloonMessages = [

"Você trouxe paz ❤️",

"Você trouxe leveza ❤️",

"Você trouxe felicidade ❤️",

"Você trouxe sorrisos ❤️",

"Você trouxe algo que eu não esperava ❤️",

"Você trouxe você ❤️"

];

/* ===================================== */
/* CREATE HEART PARTICLE */
/* ===================================== */

function createHeartBurst(x, y){

for(let i = 0; i < 12; i++){

const heart =
document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";

heart.style.left = x + "px";

heart.style.top = y + "px";

heart.style.pointerEvents = "none";

heart.style.zIndex = "9999";

heart.style.fontSize =
(Math.random()*12+14)+"px";

document.body.appendChild(heart);

const angle =
Math.random() * Math.PI * 2;

const distance =
Math.random() * 120 + 40;

const targetX =
Math.cos(angle) * distance;

const targetY =
Math.sin(angle) * distance;

heart.animate([

{
transform:
"translate(0,0) scale(1)",
opacity:1
},

{
transform:
`translate(${targetX}px,${targetY}px)
scale(0.5)`,

opacity:0
}

],{

duration:1200,
easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},1200);

}

}

/* ===================================== */
/* BALLOON CREATOR */
/* ===================================== */

function createBalloon(text,index){

const balloon =
document.createElement("div");

balloon.classList.add("balloon");

balloon.innerHTML = "🎈";

balloon.dataset.message = text;

balloon.style.animationDuration =
(3 + Math.random()*3)+"s";

balloon.style.background =

`
linear-gradient(
135deg,
hsl(${Math.random()*360},
80%,
75%),
hsl(${Math.random()*360},
80%,
60%)
)
`;

balloonsContainer.appendChild(
balloon
);

/* CLICK */

balloon.addEventListener(
"click",

e=>{

const rect =
balloon.getBoundingClientRect();

createHeartBurst(

rect.left +
rect.width/2,

rect.top +
rect.height/2

);

balloon.innerHTML =

`
<span class="balloon-text">
${text}
</span>
`;

balloon.style.padding = "12px";

balloon.style.fontSize = "14px";

balloon.style.textAlign = "center";

/* FINAL BALLOON */

if(
index ===
balloonMessages.length - 1
){

setTimeout(()=>{

showFinalBalloonMessage();

},1500);

}

/* POP */

setTimeout(()=>{

balloon.style.transition =
".5s";

balloon.style.transform =
"scale(0)";

balloon.style.opacity =
"0";

setTimeout(()=>{

balloon.remove();

},500);

},2500);

});

}

/* ===================================== */
/* FINAL MESSAGE */
/* ===================================== */

function showFinalBalloonMessage(){

const finalMessage =
document.createElement("div");

finalMessage.classList.add(
"balloon-final-message"
);

finalMessage.innerHTML =

`
<h3>✨ Você encontrou o último balão ✨</h3>

<p>
E talvez essa seja a melhor parte:
você mudou mais do que imagina.
</p>
`;

document.body.appendChild(
finalMessage
);

setTimeout(()=>{

finalMessage.classList.add(
"show"
);

},100);

setTimeout(()=>{

finalMessage.classList.remove(
"show"
);

setTimeout(()=>{

finalMessage.remove();

},1000);

},5000);

}

/* ===================================== */
/* GENERATE BALLOONS */
/* ===================================== */

balloonMessages.forEach(
(message,index)=>{

createBalloon(
message,
index
);

}
);

/* ===================================== */
/* FLOATING EFFECT */
/* ===================================== */

setInterval(()=>{

const balloons =
document.querySelectorAll(
".balloon"
);

balloons.forEach(balloon=>{

const randomX =
(Math.random()*20)-10;

balloon.style.transform =

`
translateX(${randomX}px)
`;

});

},3000);
