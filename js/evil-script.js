let summon = document.getElementById("summon");
let generator = document.getElementById("generator");

let evil = document.getElementById("evil");
let goatHead = document.getElementById("goat-head");
let skeleton = document.getElementById("skeleton");
let psycho = document.getElementById("psycho");
let slut = document.getElementById("slut");
let gateKeeper = document.getElementById("gate-keeper");
let hidden = document.getElementById("hidden");
let bitcoin = document.getElementById("bitcoin");
let baphomet = document.getElementById("baphomet");
let warrior = document.getElementById("warrior");
let orc = document.getElementById("orc");
let beheader = document.getElementById("beheader");
let spaceInvader = document.getElementById("space-invader");
let bug = document.getElementById("bug");
let shadowMan = document.getElementById("shadow-man");
let jigsaw = document.getElementById("jigsaw");
let dragon = document.getElementById("dragon");
let doom = document.getElementById("doom");
let witchesBrew = document.getElementById("witches-brew");

let demons = [evil, evil, goatHead, skeleton, psycho, slut, 
              hidden, bitcoin, gateKeeper, baphomet, warrior, orc, 
              beheader, spaceInvader, bug, shadowMan, jigsaw, dragon, doom, witchesBrew];

let random = Math.ceil(Math.random() * 19);

function summonDemon() {
    generator.innerHTML = demons[random].innerHTML;
    generator.style.position = "relative";
    generator.style.left  = "0px";
    generator.style.transform = "rotateY(0deg)";
    generator.style.fontSize = "6px";
    generator.style.color = "#ca1717";
    generator.style.animation = "hover 1.5s linear 0s infinite";
    if (generator.innerHTML === evil.innerHTML) {
        generator.style.animation = "evil 6s ease-in-out 0s infinite";
    } else if (generator.innerHTML === hidden.innerHTML) {
        generator.style.fontSize = "10px";
        generator.style.animation = "enter-hidden 1.5s linear 0s 1, hidden 1.5s ease-in-out 1.5s infinite";
    } else if (generator.innerHTML === psycho.innerHTML ||
               generator.innerHTML === gateKeeper.innerHTML) {
        generator.style.fontSize = "7.5px";
        generator.style.animation = "gate-keeper 1.5s linear 0s infinite";
    } else if (generator.innerHTML === baphomet.innerHTML) {
        generator.style.animation = "baphomet 1.5s linear 0s 1, hover 1.5s linear 1.5s infinite";
    } else if (generator.innerHTML === warrior.innerHTML) {
        generator.style.animation = "warrior 1.2s linear 0s infinite";
    } else if (generator.innerHTML === beheader.innerHTML) {
        generator.style.animation = "gate-keeper 1.5s linear 0s infinite";
    } else if (generator.innerHTML === jigsaw.innerHTML) {
        generator.style.animation = "jigsaw 3s linear 0s infinite";
    } else if (generator.innerHTML === dragon.innerHTML) {
        generator.style.animation = "dragon 1.5s linear 0s infinite";
    } else if (generator.innerHTML === witchesBrew.innerHTML) {
        generator.style.fontSize = "11px";
        generator.style.animation = "witches-brew 1.5s linear 0s infinite";
    } else if (generator.innerHTML === bitcoin.innerHTML) {
        generator.style.color = "#ffa500";
    } else if (generator.innerHTML === skeleton.innerHTML ||
               generator.innerHTML === orc.innerHTML ||
               generator.innerHTML === bug.innerHTML ||
               generator.innerHTML === shadowMan.innerHTML) {
        generator.style.fontSize = "7px";
        generator.style.color = "#008000";
        if (generator.innerHTML === skeleton.innerHTML) {
            generator.style.animation = "skeleton 3s linear 0s infinite";
        } else if (generator.innerHTML === orc.innerHTML) {
            generator.style.fontSize = "9px";
            generator.style.transform = "rotateY(180deg)";
            generator.style.position = "relative";
            generator.style.left  = "11px";
        } else if (generator.innerHTML === shadowMan.innerHTML) {
            generator.style.animation = "shadow 6s linear 0s infinite";
        }
    }
    random = Math.ceil(Math.random() * 19);
}

summon.addEventListener("click", summonDemon);
