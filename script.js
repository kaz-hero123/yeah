document.getElementById("reveal-button").addEventListener("click", function () {
  const surprise = document.getElementById("surprise");
  surprise.classList.toggle("hidden");
  this.textContent = surprise.classList.contains("hidden")
    ? "Click for a Surprise"
    : "Hide the Surprise";

  // Adding animations for each surprise element
  const messages = document.querySelectorAll(".surprise-message");
  messages.forEach((msg, index) => {
    msg.style.animationDelay = `${index * 0.5}s`;
  });
});
