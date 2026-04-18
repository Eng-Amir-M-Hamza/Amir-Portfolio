const sections = document.querySelectorAll(".glass");

function reveal() {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;

if (top < window.innerHeight - 100) {
sec.style.opacity = 1;
sec.style.transform = "translateY(0)";
}
});
}

window.addEventListener("scroll", reveal);
reveal();

console.log("FAANG Elite Case Study System Loaded");
