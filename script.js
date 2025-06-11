// script.js

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const id = form.id;
      let message = "Form submitted.";

      if (id === "loginForm") {
        message = "Welcome back! Logged in successfully.";
      } else if (id === "signupForm") {
        message = "Thank you! Your account has been created.";
      } else if (id === "checkoutForm") {
        message = "Payment successful. Enjoy your ride!";
      } else if (id === "contactForm") {
        message = "Message sent! We'll reply shortly.";
      }

      alert(message);
    });
  });
});
