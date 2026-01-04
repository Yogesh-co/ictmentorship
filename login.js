document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");

  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // 🔴 EMPTY FIELD CHECK (our own validation)
    if (username === "" || password === "") {
      errorMsg.style.display = "block";
      errorMsg.textContent = "Please fill all fields.";
      return;
    }

    const storedUser = localStorage.getItem("mftUser");

    // 🔴 NOT REGISTERED
    if (!storedUser) {
      errorMsg.style.display = "block";
      errorMsg.textContent = "Account not found. Please register first.";
      return;
    }

   const user = {
  username: JSON.parse(storedUser).username,
  password: JSON.parse(storedUser).password,
  email: JSON.parse(storedUser).email   // 🔥 MUST
};

  localStorage.setItem("mftUser", JSON.stringify(user));
  localStorage.setItem("mftLoggedIn", "true");
  window.location.href = "index.html";


    // 🔴 WRONG LOGIN
    if (username !== user.username || password !== user.password) {
      errorMsg.style.display = "block";
      errorMsg.textContent = "Incorrect username or password.";
      return;
    }

    // ✅ LOGIN SUCCESS
    errorMsg.style.display = "none";
    localStorage.setItem("mftLoggedIn", "true");
    window.location.href = "index.html";
  });

});
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyARhzctW7uL5xrwBU1tfLJktoQyNI1F0co",
  authDomain: "ictmentorship-89cad.firebaseapp.com",
  projectId: "ictmentorship-89cad",
  storageBucket: "ictmentorship-89cad.firebasestorage.app",
  messagingSenderId: "336913714074",
  appId: "1:336913714074:web:da5c8e885c8bf62499c823",
  measurementId: "G-PZ6C639VJE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleBtn = document.getElementById("googleLoginBtn");

googleBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;

    // 🔥 VERY IMPORTANT PART
    const mftUser = {
      username: user.displayName,
      password: "google-auth",
      email: user.email,
      photo: user.photoURL
    };

    localStorage.setItem("mftUser", JSON.stringify(mftUser));
    localStorage.setItem("mftLoggedIn", "true");

    window.location.href = "index.html";
  });
});
