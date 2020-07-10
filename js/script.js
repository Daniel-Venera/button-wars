let log = console.log;

let burgerCross = document.querySelector(".menu-burger");

burgerCross.addEventListener("click", function () {
  if (!burgerCross.classList.contains("open")) {
    burgerCross.classList.add("open");
  } else {
    burgerCross.classList.remove("open");
  }
});
