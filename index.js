document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     WELCOME + TYPEWRITER
  ===================== */
  const welcomeText = document.getElementById("welcomeText");
  const typeText = document.getElementById("typeText");

  const tradingWord = " TRADING";
  let i = 0;

  setTimeout(() => {
    if (welcomeText) {
      welcomeText.style.transition = "opacity 1.5s ease";
      welcomeText.style.opacity = "1";
    }
  }, 500);

  setTimeout(() => {
    const interval = setInterval(() => {
      if (i < tradingWord.length) {
        typeText.textContent += tradingWord.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 200);
  }, 2200);

  /* =====================
     LOGIN / USER MENU
  ===================== */
  const userMenu = document.getElementById("userMenu");
  const loginBtn = document.querySelector(".login-btn");

  if (userMenu) userMenu.style.display = "none";
  if (loginBtn) loginBtn.style.display = "block";

  const user = JSON.parse(localStorage.getItem("mftUser"));
  const loggedIn = localStorage.getItem("mftLoggedIn");

  if (loggedIn === "true" && user) {
    loginBtn.style.display = "none";
    userMenu.style.display = "flex";
  }
    

  
const applyBtn = document.getElementById("applyBtn");
const applyError = document.getElementById("applyError");

if (applyBtn) {
  applyBtn.addEventListener("click", (e) => {
    e.preventDefault(); // 🔥 VERY IMPORTANT

    if (localStorage.getItem("mftLoggedIn") !== "true") {
      applyError.classList.add("show");

      setTimeout(() => {
        applyError.classList.remove("show");
      }, 3000);
    } else {
      // login irundha mattum redirect
      window.location.href = "boxes.html";
    }
  });
}


  /* =====================
     USER DROPDOWN
  ===================== */
  const userCircle = document.getElementById("userCircle");
  const userDropdown = document.getElementById("userDropdown");
  const logoutBtn = document.getElementById("logoutBtn");
  const userNameText = document.getElementById("userName");

  if (user && userCircle && userNameText) {
    userCircle.textContent =
      user.username.charAt(0).toUpperCase();
    userNameText.textContent = user.username;
  }

  userCircle?.addEventListener("click", (e) => {
    e.stopPropagation();
    userDropdown.style.display =
      userDropdown.style.display === "block"
        ? "none"
        : "block";
  });

  logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("mftLoggedIn");
    window.location.reload();
  });

  document.addEventListener("click", (e) => {
    if (userDropdown && userMenu && !userMenu.contains(e.target)) {
      userDropdown.style.display = "none";
    }
  });

  /* =====================
     HAMBURGER MENU
  ===================== */
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

});
