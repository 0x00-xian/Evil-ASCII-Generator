let summon = document.getElementById("summon");
let generator = document.getElementById("generator");

let evil = document.getElementById("evil");
let goatHead = document.getElementById("goat-head");
let skeleton = document.getElementById("skeleton");
let imp = document.getElementById("imp");
let pyro = document.getElementById("pyro");
let baphomet = document.getElementById("baphomet");
let dragon = document.getElementById("dragon");
let warrior = document.getElementById("warrior");
let orc = document.getElementById("orc");
let beheader = document.getElementById("beheader");
let doom = document.getElementById("doom");
let devil = document.getElementById("devil");
let weed = document.getElementById("weed");
let paranoid = document.getElementById("paranoid");
let psycho = document.getElementById("psycho");
let burningSkull = document.getElementById("burning-skull");
let troll = document.getElementById("troll");
let electricGuitar = document.getElementById("electric-guitar");
let zombie = document.getElementById("zombie");
let fatso = document.getElementById("fatso");
let eat = document.getElementById("eat");
let slut = document.getElementById("slut");
let brains = document.getElementById("brains");
let fuck = document.getElementById("fuck");
let dungeon = document.getElementById("dungeon");
let slave = document.getElementById("slave");
let suck = document.getElementById("suck");
let jigsaw = document.getElementById("jigsaw");
let jesus = document.getElementById("jesus");
let gateKeeper = document.getElementById("gate-keeper");
let hidden = document.getElementById("hidden");
let bitcoin = document.getElementById("bitcoin");
let spaceInvader = document.getElementById("space-invader");
let bug = document.getElementById("bug");
let shadowMan = document.getElementById("shadow-man");
let witchesBrew = document.getElementById("witches-brew");

let demons = [evil, evil, goatHead, skeleton, imp, pyro,
              baphomet, dragon, warrior, orc, beheader, doom,
              devil, weed, paranoid, psycho, burningSkull, troll,
              electricGuitar, zombie, fatso, eat, slut, brains,
              fuck, dungeon, slave, suck, jigsaw, jesus,
              hidden, bitcoin, gateKeeper, 
              spaceInvader, bug, shadowMan, witchesBrew];

let random = Math.ceil(Math.random() * 36);

function summonDemon() {
    generator.innerHTML = demons[random].innerHTML;
    generator.style.position = "relative";
    generator.style.left  = "0px";
    generator.style.transform = "rotate(0deg)";
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
    } else if (generator.innerHTML === imp.innerHTML ||
               generator.innerHTML === pyro.innerHTML) {
        generator.style.animation = "pentagram 1.5s linear 0s infinite, imp 6.6s linear 0s infinite";
    } else if (generator.innerHTML === baphomet.innerHTML) {
        generator.style.animation = "baphomet 1.5s linear 0s 1, hover 1.5s linear 1.5s infinite";
    } else if (generator.innerHTML === dragon.innerHTML) {
        generator.style.animation = "pentagram 1.65s linear 0s infinite reverse, dragon 6.6s linear 0s infinite";
    } else if (generator.innerHTML === warrior.innerHTML) {
        generator.style.animation = "warrior 1.2s linear 0s infinite";
    } else if (generator.innerHTML === beheader.innerHTML ||
               generator.innerHTML === devil.innerHTML ||
               generator.innerHTML === psycho.innerHTML ||
               generator.innerHTML === electricGuitar.innerHTML ||
               generator.innerHTML === fuck.innerHTML ||
               generator.innerHTML === dungeon.innerHTML ||
               generator.innerHTML === suck.innerHTML ||
               generator.innerHTML === jesus.innerHTML ||
               generator.innerHTML === gateKeeper.innerHTML) {
        generator.style.animation = "beheader 1.5s linear 0s infinite";
        if (generator.innerHTML === psycho.innerHTML ||
            generator.innerHTML === gateKeeper.innerHTML) {
            generator.style.fontSize = "7.5px";
        } else if (generator.innerHTML === electricGuitar.innerHTML) {
            generator.style.fontSize = "5px";
        } else if (generator.innerHTML === fuck.innerHTML) {
            generator.style.fontSize = "9px";
            generator.style.transform = "rotateY(180deg)";
            generator.style.animation = "beheader 0.6s linear 0s infinite";
        } else if (generator.innerHTML === dungeon.innerHTML || 
                   generator.innerHTML === jesus.innerHTML) {
            generator.style.fontSize = "7px";
            generator.style.transform = "rotate(-180deg)";
        } else if (generator.innerHTML === suck.innerHTML) {
            generator.style.fontSize = "6.6px";
        }
    } else if (generator.innerHTML === paranoid.innerHTML) {
        generator.style.animation = "paranoia 1.5s linear 0s infinite";
    } else if (generator.innerHTML === burningSkull.innerHTML) {
        generator.style.animation = "pentagram 1.65s linear 0s infinite reverse, burning-skull 6.6s linear 0s infinite";
    } else if (generator.innerHTML === zombie.innerHTML ||
               generator.innerHTML === slave.innerHTML) {
        generator.style.fontSize = "15px";
        generator.style.animation = "zombie 1.5s linear 0s infinite";
        if (generator.innerHTML === slave.innerHTML) {
            generator.style.fontSize = "9px";
        }
    } else if (generator.innerHTML === slut.innerHTML ||
               generator.innerHTML === witchesBrew.innerHTML) {
        generator.style.fontSize = "11px";
        generator.style.animation = "witches-brew 1.5s linear 0s infinite";
        if (generator.innerHTML === slut.innerHTML) {
            generator.style.position = "relative";
            generator.style.left  = "-11px";
            generator.style.fontSize = "10px";
        }
    } else if (generator.innerHTML === fatso.innerHTML) {
        generator.style.animation = "fat 1.5s linear 0s infinite";
    } else if (generator.innerHTML === eat.innerHTML) {
        generator.style.animation = "eat 1.1s linear 0s infinite";
    } else if (generator.innerHTML === brains.innerHTML) {
        generator.style.color = "#ee82ee";
        generator.style.animation = "brains 5s linear 0s infinite";
    } else if (generator.innerHTML === hidden.innerHTML) {
        generator.style.fontSize = "10px";
        generator.style.animation = "hidden 1.5s linear 0s 1, zombie 1.5s ease-in-out 1.5s infinite";
    } else if (generator.innerHTML === jigsaw.innerHTML) {
        generator.style.animation = "jigsaw 3s linear 0s infinite";
    } else if (generator.innerHTML === bitcoin.innerHTML) {
        generator.style.color = "#ffa500";
    }
    random = Math.ceil(Math.random() * 36);
}

summon.addEventListener("click", summonDemon);
