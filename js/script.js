// Sticky header scripts
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Hamburger menu scripts
function toggleMenu(){
  var nav = document.getElementById('menu');
  if(nav.style.display === "block"){
    nav.style.display = "none";
  }else{
    nav.style.display = "block"
  }
}