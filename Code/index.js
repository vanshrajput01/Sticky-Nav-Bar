window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.style.width = "100%"
    navbar.style.marginLeft = "0px"
    
  } else {
    navbar.classList.remove("sticky");
    navbar.style.width = "80%"
    navbar.style.marginLeft = "100px"

  }
}