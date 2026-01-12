/* ===================== THEME COLOR SWITCHER ===================== */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
const dayNight = document.querySelector(".day-night");
const alternateStyles = document.querySelectorAll(".alternate-style");

/* Toggle style switcher panel */
styleSwitcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

/* Close panel when scrolling */
window.addEventListener("scroll", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

/* Change color theme */
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
      localStorage.setItem("themeColor", color);
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/* Restore saved theme on reload */
const savedColor = localStorage.getItem("themeColor");
if (savedColor) setActiveStyle(savedColor);

/* ===================== DARK / LIGHT MODE ===================== */

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  localStorage.setItem("themeMode",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

/* Restore saved mode */
const savedMode = localStorage.getItem("themeMode");
if (savedMode === "dark") {
  document.body.classList.add("dark");
  dayNight.querySelector("i").classList.remove("fa-moon");
  dayNight.querySelector("i").classList.add("fa-sun");
}
