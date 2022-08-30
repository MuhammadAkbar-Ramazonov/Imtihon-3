var elOpenMenu = document.querySelector(".site-header__burger")
var elOpenList = document.querySelector(".sitenav")
var elBody = document.querySelector("body")

elOpenMenu.addEventListener("click", function(){
    elBody.classList.toggle("body-overflow")
    elOpenList.classList.toggle("sitenav--active");
    elOpenMenu.classList.toggle("site-header__burger--close");
});
