let summon = document.getElementById("summon");
let generator = document.getElementById("generator");

let evil = document.getElementById("evil");
let goatHead = document.getElementById("goat-head");
let skeleton = document.getElementById("skeleton");
let psycho = document.getElementById("psycho");
let imp = document.getElementById("imp");
let baphomet = document.getElementById("baphomet");
let dragon = document.getElementById("dragon");
let warrior = document.getElementById("warrior");
let orc = document.getElementById("orc");
let beheader = document.getElementById("beheader");
let doom = document.getElementById("doom");
let devil = document.getElementById("devil");
let weed = document.getElementById("weed");
let electric = document.getElementById("electric");
let eat = document.getElementById("eat");
let brains = document.getElementById("brains");
let slut = document.getElementById("slut");
let gateKeeper = document.getElementById("gate-keeper");
let hidden = document.getElementById("hidden");
let bitcoin = document.getElementById("bitcoin");
let spaceInvader = document.getElementById("space-invader");
let bug = document.getElementById("bug");
let shadowMan = document.getElementById("shadow-man");
let jigsaw = document.getElementById("jigsaw");
let witchesBrew = document.getElementById("witches-brew");

let demons = [evil, evil, goatHead, skeleton, psycho, imp,
              baphomet, dragon, warrior, orc, beheader, doom,
              devil, weed, electric, eat, brains,
              slut, hidden, bitcoin, gateKeeper, 
              spaceInvader, bug, shadowMan, jigsaw, witchesBrew];

let random = Math.ceil(Math.random() * 25);

function summonDemon() {
    generator.innerHTML = demons[random].innerHTML;
    generator.style.position = "relative";
    generator.style.left  = "0px";
    generator.style.transform = "rotateY(0deg)";
    generator.style.fontSize = "6px";
    generator.style.color = "#ca1717";
    generator.style.filter = "saturate(100%)";
    generator.style.animation = "hover 1.5s linear 0s infinite";
    if (generator.innerHTML === evil.innerHTML) {
        generator.style.animation = "evil 6s ease-in-out 0s infinite";
    } else if (generator.innerHTML === skeleton.innerHTML ||
               generator.innerHTML === orc.innerHTML ||
               generator.innerHTML === weed.innerHTML ||
               generator.innerHTML === bug.innerHTML ||
               generator.innerHTML === shadowMan.innerHTML) {
        generator.style.color = "#008000";
        if (generator.innerHTML === skeleton.innerHTML) {
            generator.style.filter = "saturate(166%)";
            generator.style.animation = "skeleton 3s linear 0s infinite";
        } else if (generator.innerHTML === orc.innerHTML) {
            generator.style.fontSize = "9px";
            generator.style.transform = "rotateY(180deg)";
            generator.style.position = "relative";
            generator.style.left  = "11px";
        } else if (generator.innerHTML === bug.innerHTML) {
            generator.style.fontSize = "7px";
        } else if (generator.innerHTML === shadowMan.innerHTML) {
            generator.style.animation = "shadow 6s linear 0s infinite";
        }
    } else if (generator.innerHTML === psycho.innerHTML ||
               generator.innerHTML === beheader.innerHTML ||
               generator.innerHTML === devil.innerHTML ||
               generator.innerHTML === electric.innerHTML ||
               generator.innerHTML === gateKeeper.innerHTML) {
        if (generator.innerHTML === psycho.innerHTML ||
            generator.innerHTML === gateKeeper.innerHTML) {
            generator.style.fontSize = "7.5px";
        } else if (generator.innerHTML === electric.innerHTML) {
            generator.style.fontSize = "5px";
        }
        generator.style.animation = "psycho 1.5s linear 0s infinite";
    } else if (generator.innerHTML === imp.innerHTML) {
        generator.style.fontSize = "7px";
        generator.style.animation = "pentagram 1.5s linear 0s infinite, hover 1.5s linear 0s infinite";
    } else if (generator.innerHTML === baphomet.innerHTML) {
        generator.style.animation = "baphomet 1.5s linear 0s 1, hover 1.5s linear 1.5s infinite";
    } else if (generator.innerHTML === dragon.innerHTML) {
        generator.style.animation = "pentagram 1.65s linear 0s infinite reverse, dragon 6.6s linear 0s infinite";
    } else if (generator.innerHTML === warrior.innerHTML) {
        generator.style.animation = "warrior 1.2s linear 0s infinite";
    } else if (generator.innerHTML === eat.innerHTML) {
        generator.style.animation = "eat 1.5s linear 0s infinite";
    } else if (generator.innerHTML === brains.innerHTML) {
        generator.style.color = "#ee82ee";
        generator.style.animation = "brains 5s linear 0s infinite";
    } else if (generator.innerHTML === hidden.innerHTML) {
        generator.style.fontSize = "10px";
        generator.style.animation = "enter-hidden 1.5s linear 0s 1, hidden 1.5s ease-in-out 1.5s infinite";
    } else if (generator.innerHTML === jigsaw.innerHTML) {
        generator.style.animation = "jigsaw 3s linear 0s infinite";
    } else if (generator.innerHTML === witchesBrew.innerHTML) {
        generator.style.fontSize = "11px";
        generator.style.animation = "witches-brew 1.5s linear 0s infinite";
    } else if (generator.innerHTML === bitcoin.innerHTML) {
        generator.style.color = "#ffa500";
    }
    random = Math.ceil(Math.random() * 25);
}

summon.addEventListener("click", summonDemon);
