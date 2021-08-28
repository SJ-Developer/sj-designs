function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    console.log("Mode changed.");
 };

//  Navbar Effect
 window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>100){
        document.querySelector(".navbar").style.boxShadow = "4px 4px 15px #45a29e";
    } else {
        document.querySelector(".navbar").style.boxShadow = "0px 0px 0px #45a29e";
    }
});

// Top Button Function
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction(), myFunction()};

function scrollFunction() {
  if (this.scrollY > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Modal Box
var modal = document.getElementById("myModal");
var btn = document.getElementById("Btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function sign(){
  modal.style.display = "block";
}

// Reset Button
function reset(){
  document.getElementById(".name").value = "";
  document.getElementById(".email").value = "";
}

// Submit Button
function show(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var visitor = { Name:name, Email:email};
  confirm("Name: " + name + " Email-ID: " + email);
  document.getElementById("Btn").value = "Hi " + name;
  document.getElementById("Btn").classList.add = "disable";
}

// Scroll progressbar
// window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Navbar
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}