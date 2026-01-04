document.addEventListener("DOMContentLoaded", () => {

  const user = JSON.parse(localStorage.getItem("mftUser"));

  if (!user) {
    alert("Please login first");
    window.location.href = "login.html";
    return;
  }

  const courseNameEl = document.getElementById("courseName");
  const courseDescEl = document.getElementById("courseDesc");
  const homeBtn = document.getElementById("homeBtn");

  const course = localStorage.getItem(`mftCourse_${user.email}`);

  if (!course) {
    courseNameEl.innerText = "No Course Applied";
    courseDescEl.innerText =
      "You have not enrolled in any mentorship yet.";
    return;
  }

  courseNameEl.innerText = course;

  // 🧠 Description based on course
  if (course === "ICT") {
    courseDescEl.innerText =
      "Institutional order flow, smart money concepts, liquidity models, and high-probability trading frameworks.";
  } 
  else if (course === "SMC") {
    courseDescEl.innerText =
      "Market structure, liquidity zones, inducement, and institutional manipulation strategies.";
  } 
  else {
    courseDescEl.innerText =
      "Pure price action trading focused on candle psychology, structure, and market behavior.";
  }

  homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });

});
