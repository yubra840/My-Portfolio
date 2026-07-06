var typed = new Typed(".typing",{
strings: ["", "Web Designer", "Web Developer", "Mobile App Developer", "Graphic Designer", "YouTuber"],
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


/* ========== EmailJS contact form ========== */
// 1. Sign up free at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail) -> copy the Service ID
// 3. Create an Email Template using variables {{from_name}}, {{from_email}}, {{subject}}, {{message}} -> copy the Template ID
// 4. Account > General -> copy your Public Key
// 5. Paste all three values below.

const EMAILJS_PUBLIC_KEY = "3J0UNNCXaqzJoqDP4";
const EMAILJS_SERVICE_ID = "service_17kph5q";
const EMAILJS_TEMPLATE_ID = "template_ips3kih";

emailjs.init(EMAILJS_PUBLIC_KEY);

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = contactForm.querySelector("button[type='submit']");
  const originalText = submitBtn.textContent;

  const templateParams = {
    name: this.name.value,
    from_email: this.email.value,
    subject: this.subject.value || "New Contact Message",
    message: this.message.value,
  };

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  formStatus.textContent = "";

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams).then(
    function () {
      formStatus.style.fontWeight = "bold";
      formStatus.style.padding = "10px";
      formStatus.style.borderRadius = "10px";
      formStatus.style.textAlign = "center";
      formStatus.style.background = "lightgreen";
      formStatus.textContent = "Message sent successfully✅ I'll get back to you soon.";
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    },
    function (error) {
      formStatus.style.color = "red";
      formStatus.style.borderRadius = "10px";
      formStatus.style.fontWeight = "bold";
      formStatus.style.padding = "10px";
      formStatus.style.textAlign = "center";
      formStatus.style.background = "lightcoral";
      formStatus.textContent = "Something went wrong❌. Please try again or email me directly.";
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      console.error("EmailJS error:", error);
    }
  );
});