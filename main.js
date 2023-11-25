const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneCookie = screen1.querySelector(".img");
const resetBtn = screen2.querySelector("button");

let fortune = "";

function showFortune() {
  fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  document.querySelector(".fortune").innerText = fortune;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !screen1.classList.contains("hidden")) {
    openCookie();
  }
});

fortuneCookie.addEventListener("click", () => {
  openCookie();
});

resetBtn.addEventListener("click", toggleScreens);

function toggleScreens() {
  screen1.classList.toggle("hidden");
  screen2.classList.toggle("hidden");
}

function openCookie() {
  toggleScreens();
  showFortune();
}
