// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Saat Humburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar utk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

// ketika diklik dimanapun dihalaman
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
