document.addEventListener("DOMContentLoaded", () => {

  const loggedIn = localStorage.getItem("mftLoggedIn");
  const user = JSON.parse(localStorage.getItem("mftUser"));

  if (loggedIn !== "true" || !user) {
    alert("Please login first");
    window.location.href = "login.html";
    return;
  }

  const appliedCourse = localStorage.getItem(
    `mftCourse_${user.email}`
  );
  const appliedStatus = localStorage.getItem(
    `mftApplied_${user.email}`
  );

  const cards = document.querySelectorAll(".strategy-card");

  cards.forEach(card => {
    const courseName = card.dataset.course;
    const badge = card.querySelector(".applied-badge");

    // ✅ SHOW BADGE ONLY FOR APPLIED COURSE
    if (
  appliedStatus === "true" &&
  appliedCourse &&
  appliedCourse.toLowerCase() === courseName.toLowerCase()
) {
  badge.style.display = "inline-block";
} else {
  badge.style.display = "none";
}

    card.addEventListener("click", () => {
      window.location.href = card.dataset.link;
    });
  });

});
