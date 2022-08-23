var accordionOpen = document.querySelectorAll(".accordion");
var moreinfo = document.querySelectorAll(".panel");

accordionOpen.forEach(function (panel, index) {
    
  panel.addEventListener("click", function () {
    console.log(panel);
    panel.classList.toggle("active");
    moreinfo[index].classList.toggle("active");
    console.log(moreinfo)
  });
});
