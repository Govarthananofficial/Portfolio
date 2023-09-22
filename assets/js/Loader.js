gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);

// Get a reference to the button element
const btn = document.getElementById("btn");

// Add a click event listener to the button
btn.addEventListener("click", function () {
    // Navigate to the next HTML page (replace 'next-page.html' with the actual URL)
    window.location.href = "index.html";
});
