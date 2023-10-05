$(document).ready(() => {
  const spinner = document.getElementById("loading");

  // Add .loaded to .loading
  spinner.classList.add("loaded"); //ロードしたらLoading画面を隠す

  //scroll_effect
  $(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll(".scroll_up, .Headline");
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add("on");
        }
      }
    };
    window.addEventListener("load", scrollAnimationFunc);
    window.addEventListener("scroll", scrollAnimationFunc);
  });
});
