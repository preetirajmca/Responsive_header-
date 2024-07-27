var menuUL = document.getElementsByTagName("ul")[0];
var btnToggle = document.getElementsByClassName("btn-toggle")[0];
btnToggle.addEventListener("click", function(){
    if (menuUL.style.maxHeight) {
        menuUL.style.maxHeight = null;
    } else {
        menuUL.style.maxHeight = menuUL.scrollHeight + "px";
    }
});