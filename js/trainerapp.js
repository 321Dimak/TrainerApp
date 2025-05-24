"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      const password = form.querySelector('input[name="password"]');
      const confirmPassword = form.querySelector(
        'input[placeholder="Confirm your password"]'
      );

      if (confirmPassword && password.value !== confirmPassword.value) {
        e.preventDefault();
        alert("Passwords do not match.");
      }
    });
  }
});

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("focus", () => {
    input.style.border = "2px solid #00ff88";
  });
  input.addEventListener("blur", () => {
    input.style.border = "1px solid #555";
  });
});

function showOverlay(message) {
  const overlay = document.getElementById("overlay");
  const text = document.getElementById("overlay-text");
  text.textContent = message;
  overlay.style.display = "flex";
}

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}
