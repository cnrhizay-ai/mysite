// Smooth scroll button
function scrollToSection() {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
}

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Navbar aktif link
const links = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section, header").forEach(sec => {
    const top = sec.offsetTop - 100;
    if (scrollY >= top) {
      current = sec.getAttribute("id");
    }
  });

  links.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});