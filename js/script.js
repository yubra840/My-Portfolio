var typed = new Typed(".typing",{
strings: ["", "Web Designer", "Web Developer", "Graphic Designer", "YouTuber"],
typeSpeed: 100,
BackSpeed: 60,
loop:true
})

const navLinks = document.querySelectorAll(".aside .nav a");
const sections = document.querySelectorAll("section");

/* ========== Click active link ========== */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

/* ========== Scroll spy (auto highlight on scroll) ========== */
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const overlay = document.querySelector(".body-overlay");
const navItems = document.querySelectorAll(".aside .nav a");

navToggler.addEventListener("click", () => {
  aside.classList.toggle("open");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", closeSidebar);

navItems.forEach(link => {
  link.addEventListener("click", closeSidebar);
});

function closeSidebar() {
  aside.classList.remove("open");
  overlay.classList.remove("active");
}


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const subject = this.subject.value || "New Contact Message";
  const message = this.message.value;

  const mailtoLink = `mailto:yubraotieno@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  window.location.href = mailtoLink;
});
