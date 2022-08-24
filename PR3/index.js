var accordionOpen = document.querySelectorAll(".accordion");
var moreinfo = document.querySelectorAll(".panel");
var body = document.querySelector(".container");

accordionOpen.forEach(function (panel, index) {
  panel.addEventListener("click", function (e) {
    // console.log(panel);
    // panel.classList.toggle("active");
    moreinfo.forEach(function (info) {
      info.classList.remove("active");
    });
    moreinfo[index].classList.toggle("active");
    // console.log(moreinfo)
    e.stopPropagation();
  });

  

});
body.addEventListener("click", function (e) {
  moreinfo.forEach(function (info) {
    info.classList.remove("active");
  });
})
