let summon = document.getElementById("summon");
let generator = document.getElementById("generator");

let evil = document.getElementById("evil");

let demons = [evil, evil];

let random = Math.ceil(Math.random() * 1);

function summonDemon() {
    generator.innerHTML = demons[random].innerHTML;
    if (generator.innerHTML === evil.innerHTML) {
        generator.style.fontSize = "6px";
        generator.style.color = "#ca1717";
        generator.style.animation = "evil 1.5s linear 0s infinite";
    }
    random = Math.ceil(Math.random() * 1);
}

summon.addEventListener("click", summonDemon);
