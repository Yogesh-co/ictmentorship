(function () {
  emailjs.init("eHcG6LSzdKI3hLJnR");
})();

const applyForm = document.getElementById("applyForm");
const submitBtn = document.getElementById("submitBtn");
const successBox = document.getElementById("successBox");

applyForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("mftUser"));
  if (!user) {
    alert("Please login first");
    window.location.href = "login.html";
    return;
  }

  submitBtn.textContent = "Submitting...";
  submitBtn.disabled = true;

  const email = user.email; // ✅ FIXED
  const course = applyForm.course_type.value;

  console.log("Saving:", email, course);

  // ✅ SAVE COURSE
  localStorage.setItem(`mftCourse_${email}`, course);

  // ✅ SAVE APPLIED STATUS
  localStorage.setItem(`mftApplied_${email}`, "true");

  applyForm.style.display = "none";
  successBox.style.display = "flex";

  setTimeout(() => {
    window.location.href = "mycourse.html";
  }, 1200);

  emailjs.sendForm(
    "service_h4a9wlm",
    "template_0ekbo7q",
    applyForm
  ).catch(() => {});
});
