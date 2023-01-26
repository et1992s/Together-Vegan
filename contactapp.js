const navSlide = () => {
  const lines = document.querySelector(".lines");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  lines.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3}s`;
      }
    });
    //Lines animation
    lines.classList.toggle("toggle");
  });
};

navSlide();

var firstnameError = document.getElementById("firstname-error");
var lastnameError = document.getElementById("lastname-error");
var emailError = document.getElementById("email-error");
var phonenumberError = document.getElementById("phonenumber-error");
var messageError = document.getElementById("message-error");
var btnError = document.getElementById("btn-error");

function validateFirstName() {
  var firstname = document.getElementById("first-name").value;

  if (firstname.length == 0) {
    firstnameError.innerHTML = "First Name Is Required";
    return false;
  }
  firstnameError.innerHTML = '<i class="fa-solid fa-badge-check"></i>';
  return true;
}
function validateLastName() {
  var lastname = document.getElementById("last-name").value;

  if (lastname.length == 0) {
    lastnameError.innerHTML = "Last Name Is Required";
    return false;
  }
  lastnameError.innerHTML = "";
  return true;
}
function validateEmail() {
  var email = document.getElementById("email-address").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email Address Is Required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,5}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-badge-check"></i>';
  return true;
}
function validatePhone() {
  var phonenumber = document.getElementById("phone-number").value;

  if (phonenumber.length == 0) {
    phonenumberError.innerHTML = "Phone Number Is Required";
    return false;
  }
  if (phonenumber.length !== 10 && phonenumber.length !== 11) {
    phonenumberError.innerHTML = "Phone Number should be 10 or 11 digits";
    return false;
  }
  phonenumberError.innerHTML = "";
  return true;
}
function validateMessage() {
  var message = document.getElementById("message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " " + "more characters are required";
    return false;
  }
  messageError.innerHTML = "";
  return true;
}
function validateForm() {
  if (
    !validateFirstName() ||
    !validateLastName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    btnError.innerHTML = "Check Your Details";
    return false;
  }
  btnError.innerHTML = "";
  return true;
}
