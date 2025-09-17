let summon = document.getElementById("summon");
let generator = document.getElementById("generator");

let demon = '';

let demons = [demon];
let random = 0;

function summonDemon() {
    generator.innerHTML = demons[random].innerHTML;
}

summon.addEventListener("click", summonDemon);
