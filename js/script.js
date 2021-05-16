/** @format */

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("navbar").style.background = "#1d1d1d";
  } else {
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0)";
  }
}

const button = document.querySelector("button");
const html = document.querySelector("html");

button.addEventListener("click", function () {
  colormode();
});

function colormode() {
  if (html.dataset.color === "light") {
    html.dataset.color = "dark";
    button.innerHTML = "Light Mode";
    console.log("Dark Mode on");
    console.log("Dark Mode is Real");
  } else {
    html.dataset.color = "light";
    button.innerHTML = "Dark Mode";
    console.log("Light Mode on");
  }
}
