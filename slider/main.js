const slides = document.querySelector(".slider");
const slideImg = document.querySelectorAll(".slider li");
let currentId = 0;
const slideCount = slideImg.length;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slideWidth = 1152;

slides.style.width = slideWidth * slideCount + "px";

function moveSlide(num) {
  slides.style.left = -num * slideWidth + "px";
  currentId = num;
}

prev.addEventListener("click", function () {
  if (currentId !== 0) moveSlide(currentId - 1);
});

next.addEventListener("click", function () {
  if (currentId !== slideCount - 1) {
    moveSlide(currentId + 1);
  }
});

// js 문법
// https://eunhee-programming.tistory.com/106 참고
