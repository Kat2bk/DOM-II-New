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

const anchors = document.querySelectorAll("header nav a");

anchors.forEach(function(item) {
  item.addEventListener("click", event => {
    item.style.transform = "scale(1.5)";
    if (item.style.transform === "scale(1.5)") {
      event.target.removeEventListener("click");
    }
  });
});

// how to add another click that removes transform
