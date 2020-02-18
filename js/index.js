// Your code goes here
const images = document.getElementsByTagName("img");
// console.log(images);

Array.from(images).forEach(item => {
  item.addEventListener("mouseenter", e => {
    item.style.transform = "scale(1.2)";
    item.style.transition = "all 0.3s";
  });
});

Array.from(images).forEach(function(item) {
  item.addEventListener("mouseleave", function(e) {
    item.style.transform = "scale(1)";
  });
});

// why does image scale over other elements?

// const anchors = document.querySelectorAll("header nav a");

// anchors.forEach(function(item) {
//   item.addEventListener("click", event => {
//     item.style.transform = "scale(1.5)";
//     if (item.style.transform === "scale(1.5)") {
//       event.target.removeEventListener("click");
//     }
//   });
// });

// how to add another click that removes transform, different way of doing it.

const fontContainer = document.getElementsByTagName("p");
window.addEventListener("resize", () => {
  document.getElementsByTagName("p");
  fontContainer.style.color = "green";
});

const ImgChange = document.querySelector("header img");
ImgChange.addEventListener("click", () => {
  ImgChange.src = "https://i.ytimg.com/vi/n_PRLmvdLT8/maxresdefault.jpg";
});

const fontChange = document.querySelector(".logo-heading");
fontChange.addEventListener("mouseover", () => {
  fontChange.style.color = "orange";
});
fontChange.addEventListener("mouseleave", () => {
  fontChange.style.color = "black";
});

const anchors = document.querySelectorAll("header nav a");
anchors.forEach(function(item) {
  item.addEventListener("mouseup", e => {
    item.style.transform = "scale(1.5)";
  });
});

anchors.forEach(function(item) {
  item.addEventListener("mousedown", e => {
    item.style.transform = "scale(1)";
  });
});

const scrollProperty = document.querySelector(".footer p");
window.addEventListener("scroll", () => {
  scrollProperty.style.color = "red";
});

document.querySelectorAll("img").forEach(function(item) {
  item.addEventListener("dblclick", () => {
    item.style.display = "none";
  });
});

// buttons

const buttonSize1 = document.querySelectorAll(".btn")[0];
buttonSize1.addEventListener("mouseover", e => {
  buttonSize1.style.transform = "scale(1.2)";
  e.stopPropagation();
});

const buttonSize2 = document.querySelectorAll(".btn")[1];
buttonSize2.addEventListener("mouseover", e => {
  buttonSize2.style.transform = "scale(1.2)";
  e.stopPropagation();
});

const buttonSize3 = document.querySelectorAll(".btn")[2];
buttonSize3.addEventListener("mouseover", e => {
  buttonSize3.style.transform = "scale(1.2)";
  e.stopPropagation();
});

window.addEventListener("load", e => {
  alert("this site accepts cookies, is this okay?");
});

document.querySelectorAll("header nav a").forEach(function(item) {
  item.addEventListener("click", event => {
    event.preventDefault();
  });
});
