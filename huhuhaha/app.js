const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender === "user" ? "user-message" : "bot-message");
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text !== "") {
    addMessage(text, "user");
    userInput.value = "";

    // Simulated bot response (replace with your AI code later)
    setTimeout(() => {
      addMessage("Thanks for your message! 🌿 How can I assist with your hotel or nature journey?", "bot");
    }, 800);
  }
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});
