let demonsPerPage = 9;
let current = 1;
let demons = [];

document.addEventListener("DOMContentLoaded", function() {
    demons = Array.from(document.querySelectorAll("pre"));
    initPagination();
});

function initPagination() {
    let total = Math.ceil(demons.length / demonsPerPage);
    display(current);
    createControls(total);
}

function display(page) {
    let credits = document.getElementById("credits");
    credits.innerHTML = "";
    let start = (page - 1) * demonsPerPage;
    let end = Math.min(start + demonsPerPage, demons.length);
    for (let i = start; i < end; i++) {
        let demon = demons[i].cloneNode(true);
        credits.appendChild(demon);
    }
    current = page;
    updateControls();
}

function createControls(total) {
    let controls = document.getElementById("controls");
    let previous = document.createElement("button");
    previous.textContent = "<<";
    previous.id = "previous";
    previous.addEventListener("click", displayPreviousPage);
    let next = document.createElement('button');
    next.textContent = ">>";
    next.id = "next";
    next.addEventListener("click", displayNextPage);
    let pageNumbers = document.createElement("div");
    pageNumbers.id = "page-numbers";
    controls.appendChild(previous);
    controls.appendChild(pageNumbers);
    controls.appendChild(next);
    generatePageNumbers(total);
}

function generatePageNumbers(total) {
    let pageNumbers = document.getElementById("page-numbers");
    pageNumbers.innerHTML = "";
    for (let i = 1; i <= total; i++) {
        let pageNumber = document.createElement("button");
        pageNumber.textContent = i;
        pageNumber.className = "page-number";
        pageNumber.addEventListener("click", () => displayPage(i));
        pageNumbers.appendChild(pageNumber);
    }
}

function updateControls() {
    let total = Math.ceil(demons.length / demonsPerPage);
    let previous = document.getElementById("previous");
    let next = document.getElementById("next");
    let allPageNumbers = document.querySelectorAll(".page-number");
    previous.disabled = current === 1;
    next.disabled = current === total;
    allPageNumbers.forEach((number, index) => {
        if (index + 1 === current) {
            number.classList.add("active");
        } else {
            number.classList.remove("active");
        }
    });
}

function displayPage(page) {
    let total = Math.ceil(demons.length / demonsPerPage);
    if (page >= 1 && page <= total) {
        display(page);
    }
}

function displayPreviousPage() {
    if (current > 1) {
        display(current - 1);
    }
}

function displayNextPage() {
    let total = Math.ceil(demons.length / demonsPerPage);
    if (current < total) {
        display(current + 1);
    }
}
