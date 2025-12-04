(function () {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const themeToggle = document.getElementById("themeToggle");
  const yearSpan = document.getElementById("year");

  // Mobile nav
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // Current year in footer
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Dark mode
  const savedTheme = window.localStorage.getItem("ba-theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem("ba-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("ba-theme", "dark");
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
})();
