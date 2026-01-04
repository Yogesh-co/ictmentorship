document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const error = document.getElementById("regError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (!username || !password) {
      error.style.display = "block";
      error.textContent = "Fill all fields";
      return;
    }

    const userData = {
      username,
      password
    };

    localStorage.setItem("mftUser", JSON.stringify(userData));
    alert("Registered successfully. Please login.");
    window.location.href = "login.html";
  });
});
