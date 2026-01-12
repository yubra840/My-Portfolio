// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Form Validation
const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        form.reset();
    }
});

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();