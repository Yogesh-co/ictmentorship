const user = JSON.parse(localStorage.getItem("mftUser"));
const loggedIn = localStorage.getItem("mftLoggedIn");

if (!loggedIn || !user) {
  window.location.href = "login.html";
}

// Elements
const profilePic = document.getElementById("profilePic");
const userName = document.getElementById("userName");
const logoutBtn = document.getElementById("logoutBtn");
const myCourses = document.getElementById("myCourses");
const contactUs = document.getElementById("contactUs");

// Set user name
userName.textContent = user.username;

// Set profile image or first letter
if (user.photo) {
  profilePic.style.backgroundImage = `url(${user.photo})`;
  profilePic.textContent = "";
} else {
  profilePic.textContent = user.username.charAt(0).toUpperCase();
}

// Menu actions
myCourses.addEventListener("click", () => {
  
});

contactUs.addEventListener("click", () => {
  window.location.href = "contactus.html"; // change if needed
});

// Logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("mftLoggedIn");
  localStorage.removeItem("mftUser");
  window.location.href = "index.html";
});
