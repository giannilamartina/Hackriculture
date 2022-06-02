const card = document.querySelectorAll(".card__inner");

function flipCard() {
  this.classList.toggle("is-flipped");
}
card.forEach((card) => card.addEventListener("click", flipCard));

const navigationHeight = document.querySelector(".navbar").offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);
