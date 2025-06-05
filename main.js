document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".toggle");
  const navRight = document.querySelector(".nav-right");

  toggle.addEventListener("click", function () {
    // Toggle active class on hamburger menu
    this.classList.toggle("active");

    // Toggle active class on nav menu
    navRight.classList.toggle("active");

    // Prevent scrolling when menu is open
    if (navRight.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Close menu when clicking on a link (optional)
  const navLinks = document.querySelectorAll(".nav-links a, .dropdown");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 950) {
        toggle.classList.remove("active");
        navRight.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });
});
