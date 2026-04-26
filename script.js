// Smooth scroll to a selector
function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
function handleReveal() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("active");
  });
}
window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// Navbar active link tracking
const links = document.querySelectorAll(".nav-links a");
function updateActiveLink() {
  let current = "";
  document.querySelectorAll("section, header").forEach((sec) => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.getAttribute("id");
  });
  links.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}
window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("show")),
    );
}

// Contact form (client-side mock)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const status = contactForm.querySelector(".form-status");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();
    if (!name || !email || !message) {
      status.textContent = "Lütfen tüm alanları doldurun.";
      return;
    }
    status.textContent = "Gönderiliyor...";
    // Simulate async send
    setTimeout(() => {
      status.textContent = "Mesajınız alındı — teşekkürler!";
      contactForm.reset();
    }, 800);
  });
}
