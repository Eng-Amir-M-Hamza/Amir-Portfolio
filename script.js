const sections = document.querySelectorAll(".reveal");

function reveal() {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;

if (top < window.innerHeight - 120) {
sec.classList.add("show");
}
});
}

window.addEventListener("scroll", reveal);
reveal();

console.log("FAANG Ultra Cinematic Portfolio Loaded");
