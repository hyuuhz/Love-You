/* ===================================== */
/* LOADER */
/* ===================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 1500);

});

/* ===================================== */
/* CURSOR GLOW */
/* ===================================== */

const cursorGlow =
document.getElementById("cursorGlow");

document.addEventListener("mousemove", e => {

    cursorGlow.style.left =
    e.clientX + "px";

    cursorGlow.style.top =
    e.clientY + "px";

});

/* ===================================== */
/* MÚSICA */
/* ===================================== */

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicToggle");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if(!isPlaying){

        music.play();

        musicBtn.innerHTML = "❚❚";

        isPlaying = true;

    }else{

        music.pause();

        musicBtn.innerHTML = "♫";

        isPlaying = false;

    }

});

/* ===================================== */
/* SCROLL SUAVE */
/* ===================================== */

document
.querySelectorAll("[data-scroll]")
.forEach(button => {

    button.addEventListener("click", () => {

        const target =
        document.querySelector(
            button.dataset.scroll
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ===================================== */
/* REVEAL ON SCROLL */
/* ===================================== */

const revealElements = [

    ...document.querySelectorAll(
        ".quality-card"
    ),

    ...document.querySelectorAll(
        ".timeline-item"
    ),

    ...document.querySelectorAll(
        ".photo-card"
    ),

    ...document.querySelectorAll(
        ".section-header"
    )

];

revealElements.forEach(el => {

    el.classList.add("reveal");

});

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"active"
);

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(el=>{

revealObserver.observe(el);

});

/* ===================================== */
/* HERO PARALLAX */
/* ===================================== */

window.addEventListener("scroll", () => {

    const hero =
    document.querySelector("#hero");

    const offset =
    window.scrollY * 0.3;

    hero.style.backgroundPositionY =
    offset + "px";

});

/* ===================================== */
/* TÍTULO CINEMÁTICO */
/* ===================================== */

const heroTitle =
document.querySelector(".hero-title");

setInterval(() => {

    heroTitle.style.transform =
    "scale(1.02)";

    setTimeout(() => {

        heroTitle.style.transform =
        "scale(1)";

    }, 1500);

}, 4000);

/* ===================================== */
/* CARTÕES 3D */
/* ===================================== */

document
.querySelectorAll(".quality-card")
.forEach(card => {

card.addEventListener("mousemove",
e => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateY =
(x - centerX) / 15;

const rotateX =
(centerY - y) / 15;

card.style.transform =

`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =

`
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
translateY(0px)
`;

});

});

/* ===================================== */
/* FOTO PARALLAX */
/* ===================================== */

document
.querySelectorAll(".photo-card")
.forEach(photo => {

photo.addEventListener(
"mousemove",

e => {

const rect =
photo.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

photo.style.transform =

`
rotateY(${(x-150)/20}deg)
rotateX(${(150-y)/20}deg)
scale(1.04)
`;

});

photo.addEventListener(
"mouseleave",

()=>{

photo.style.transform =

`
rotateY(0deg)
rotateX(0deg)
scale(1)
`;

});

});

/* ===================================== */
/* FADE ENTRE CAPÍTULOS */
/* ===================================== */

const sections =
document.querySelectorAll("section");

const sectionObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity =
"1";

entry.target.style.transform =
"translateY(0)";

}

});

},

{
threshold:0.1
}

);

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform=
"translateY(50px)";

section.style.transition=
"all 1.4s ease";

sectionObserver.observe(section);

});

/* ===================================== */
/* EFEITO DE LUZ NOS BOTÕES */
/* ===================================== */

document
.querySelectorAll("button")
.forEach(btn => {

btn.addEventListener(
"mousemove",

e=>{

const rect =
btn.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

btn.style.background =

`
radial-gradient(
circle at ${x}px ${y}px,
rgba(255,255,255,.35),
transparent 35%
),
linear-gradient(
135deg,
#ffd166,
#ff7eb3
)
`;

});

btn.addEventListener(
"mouseleave",

()=>{

btn.style.background =

`
linear-gradient(
135deg,
#ffd166,
#ff7eb3
)
`;

});

});

/* ===================================== */
/* FRASE INICIAL */
/* ===================================== */

const subtitle =
document.querySelector(
".hero-subtitle"
);

subtitle.style.opacity = "0";

setTimeout(()=>{

subtitle.style.transition =
"2s";

subtitle.style.opacity = "1";

},1000);

/* ===================================== */
/* SOM AO ENTRAR */
/* ===================================== */

document.addEventListener(
"click",

()=>{

if(!isPlaying){

music.volume = 0.4;

music.play();

musicBtn.innerHTML = "❚❚";

isPlaying = true;

}

},

{ once:true }

);
