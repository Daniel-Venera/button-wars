let log = console.log;

let burgerCross = document.querySelector(".menu-burger");
let click2 = document.querySelector("#click2");

burgerCross.addEventListener("click", function () {
  if (!burgerCross.classList.contains("open")) {
    burgerCross.classList.add("open");
  } else {
    burgerCross.classList.remove("open");
  }
});

click2.addEventListener("click", function () {
  if (click2.classList.contains("on")) {
    click2.classList.remove("on");
  } else {
    click2.classList.add("on");
  }
});
