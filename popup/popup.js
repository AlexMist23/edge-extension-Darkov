document.addEventListener("DOMContentLoaded", function () {
  const lightButtonId = document.getElementById("lightButton");
  const darkButtonId = document.getElementById("darkButton");

  const htmlRef = document.documentElement;

  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  if (lightButtonId && darkButtonId) {
    lightButtonId.addEventListener("click", function () {
      htmlRef.classList.remove("dark-mode");
      lightButtonId.classList.add("active");
      darkButtonId.classList.remove("active");
    });

    darkButtonId.addEventListener("click", function () {
      htmlRef.classList.add("dark-mode");
      darkButtonId.classList.add("active");
      lightButtonId.classList.remove("active");
    });

    if (colorScheme === "dark") {
      htmlRef.classList.add("dark-mode");
      darkButtonId.classList.add("active");
    } else {
      htmlRef.classList.remove("dark-mode");
      lightButtonId.classList.add("active");
    }
  }
});
