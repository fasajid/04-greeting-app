// This is the name we will use in the welcome message.
let userName = "Alex";

// Get the button and the message paragraph from the page.
const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

// Listen for a click on the button.
welcomeButton.addEventListener("click", function () {
  // Create a message using the value of userName.
  // We use string concatenation to join text together.
  welcomeMessage.textContent = "Welcome! " + userName;
});
