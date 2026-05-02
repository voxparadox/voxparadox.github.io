window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener("DOMContentLoaded", function () {
  var burgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
  burgers.forEach(function (el) {
    el.addEventListener("click", function () {
      el.classList.toggle("is-active");
      var menu = document.querySelector(".navbar-menu");
      if (menu) {
        menu.classList.toggle("is-active");
      }
    });
  });
});
