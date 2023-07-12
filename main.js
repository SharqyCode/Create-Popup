let submit = document.querySelector("#submit");
let popup = document.querySelector("#popup");
let ok = document.querySelector("#popup button");

submit.addEventListener("click", () => {
  popup.classList.add("open");
});

ok.addEventListener("click", () => {
  popup.classList.remove("open");
});
