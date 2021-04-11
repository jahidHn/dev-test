let scrollToTopBtn = document.getElementById("footer-scroll-top");
let mainEl = document.documentElement;
function scrollToTop() {
  mainEl.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)



