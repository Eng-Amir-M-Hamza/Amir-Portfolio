function revealOnScroll() {
const elements = document.querySelectorAll(".reveal, .card");

for (let i = 0; i < elements.length; i++) {
let windowHeight = window.innerHeight;
let elementTop = elements[i].getBoundingClientRect().top;
let elementVisible = 100;

if (elementTop < windowHeight - elementVisible) {
elements[i].classList.add("active");
}
}
}

window.addEventListener("scroll", revealOnScroll);
