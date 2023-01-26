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
