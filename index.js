"use strict";

document.body.style = "font-family: 'Roboto', sans-serif;";

const body = document.querySelectorAll("body")[0];
body.style.height = "95vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "space-between";
body.style.alignItems = "center";

const main = document.querySelectorAll("main")[0];
main.style.display = "flex";
main.style.flexWrap = "wrap";
main.style.gap = "1rem";

const menuHeadings = document.getElementsByClassName("category");
[...menuHeadings].forEach((el) => (el.style.color = "white"));
[...menuHeadings].forEach((el) => (el.style.textDecoration = "underline"));

const boxes = document.getElementsByClassName("food-category");
[...boxes].forEach((el) => {
  el.style.background = colorGenerator();
  el.style.minWidth = "200px";
  el.style.padding = "0.5rem 2rem";
});

function colorGenerator() {
  let chars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

const allergyWarning = document.getElementById("warning");
allergyWarning.style.fontSize = "2rem";
allergyWarning.style.fontStyle = "italic";
allergyWarning.style.color = "grey";

const allergySection = document.querySelector(".allergy-warning");
allergySection.style.display = "flex";
allergySection.style.flexDirection = "column";
allergySection.style.justifyContent = "center";
allergySection.style.alignItems = "center";

const allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach((el, i) => {
  if (i % 2 === 1) {
    el.style.background = "lightblue";
  }
  el.style.listStyle = "none";
  el.style.padding = "0.5rem 2rem";
  el.style.textAlign = "center";
});

const footer = document.querySelector(".footer");
footer.style = "display: flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";

const footerItem = document.querySelectorAll(".food-desc");
footerItem.forEach((el) => {
  el.style.border = "3px solid orange";
  el.style.borderRadius = "50%";
  el.style.height = "10rem";
  el.style.width = "10rem";
  el.style.display = "grid";
  el.style.placeContent = "center";
  el.style.margin = "0 1rem";
});
