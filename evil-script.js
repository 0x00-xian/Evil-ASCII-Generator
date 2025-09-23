let summon = document.getElementById("summon");
let generator = document.getElementById("generator");

let evil = document.getElementById("evil");
let goatHead = document.getElementById("goat-head");
let skeleton = document.getElementById("skeleton");
let baphomet = document.getElementById("baphomet");
let beheader = document.getElementById("beheader");
let orc = document.getElementById("orc");

let demons = [evil, evil, goatHead, skeleton, baphomet, beheader, orc];

let random = Math.ceil(Math.random() * 6);

function summonDemon() {
    generator.innerHTML = demons[random].innerHTML;
    if (generator.innerHTML === evil.innerHTML || 
        generator.innerHTML === goatHead.innerHTML || 
        generator.innerHTML === baphomet.innerHTML || 
        generator.innerHTML === orc.innerHTML) {
        generator.style.fontSize = "6px";
        generator.style.color = "#ca1717";
        generator.style.animation = "evil 1.5s linear 0s infinite";
    } else if (generator.innerHTML === skeleton.innerHTML) {
        generator.style.color = "#008000";
        generator.style.animation = "skeleton 3s linear 0s infinite";
    } else if (generator.innerHTML === beheader.innerHTML) {
        generator.style.fontSize = "6px";
        generator.style.color = "#ca1717";
        generator.style.animation = "beheader 1.5s linear 0s infinite"
    }
    random = Math.ceil(Math.random() * 6);
}

summon.addEventListener("click", summonDemon);
