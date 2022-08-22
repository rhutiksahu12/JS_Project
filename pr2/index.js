
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var n = 0;
var corousel = document.querySelector(".corousel-slide");

// images[0].classList.add('corousel-selected')
let arrayImages = [
    "images/photo1.jpg",
    'images/photo2.webp',
    'images/photo3.webp',
    'images/photo4.webp',
    'images/photo5.webp',
    'images/photo6.webp',
    'images/photo7.webp',
    'images/photo8.webp'
  
];

arrayImages.forEach((image, index) => {
  corousel.innerHTML += `<div class="corousel-item">
      <img
        src=" ${image}"
        alt=" nature image ${index}"
      />
      </div>`;
});



function nextSlide() {
  var images = document.querySelectorAll(".corousel-item");
  images.forEach((image) => {
    image.classList.remove("corousel-selected");
    // console.log(image)
  });

  n = n + 1;
  if (n == images.length) {
    n = 0;
  }
  console.log(n)

  images[n].classList.add("corousel-selected");
}
next.addEventListener("click", nextSlide);

setInterval(nextSlide, 2000);

function prevSlide() {
  var images = document.querySelectorAll(".corousel-item");

  images.forEach((image) => {
    image.classList.remove("corousel-selected");
  });
  // n==3
  n = n - 1;
  if (n < 0) {
    // console.log(n + "if");
    n = images.length-1;
  }
  console.log(n)
  // console.log(n);
  images[n].classList.add("corousel-selected");
}

prev.addEventListener("click", prevSlide);
