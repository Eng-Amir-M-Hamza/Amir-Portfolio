const elements = document.querySelectorAll(".glass, .card");

function reveal() {
elements.forEach(el => {
const top = el.getBoundingClientRect().top;

if (top < window.innerHeight - 100) {
el.style.opacity = 1;
el.style.transform = "translateY(0)";
}
});
}

window.addEventListener("scroll", reveal);
reveal();

console.log("FAANG Absolute Product System Loaded");
