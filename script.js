const sections = document.querySelectorAll(".section");

/* SAFE: no invisible bugs */
const reveal = () => {
sections.forEach(sec => {
sec.style.opacity = 1;
sec.style.transform = "translateY(0)";
sec.style.transition = "1s ease";
});
};

reveal();

console.log("God Mode v2 Stable Cinematic Loaded");
