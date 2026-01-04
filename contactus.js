// JS optional – future use (analytics / click tracking)

document.querySelectorAll(".social-item").forEach(item => {
  item.addEventListener("click", () => {
    console.log("Social link clicked");
  });
});
