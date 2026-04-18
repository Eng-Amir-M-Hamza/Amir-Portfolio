const sections = document.querySelectorAll(".section");

const reveal = () => {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;

if(top < window.innerHeight - 120){
sec.classList.add("show");
}
});
};

window.addEventListener("scroll", reveal);
reveal();

console.log("Apple-level portfolio loaded");
