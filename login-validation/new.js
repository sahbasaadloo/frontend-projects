document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const passInput = document.getElementById("password");
    const cont = document.getElementById("error-message"); // تغییر به #error-message
  
    form.addEventListener("submit", (e) => {
      let message = [];

      if (nameInput.value.trim() === "") {
        message.push("Name is required");
      }
  
      if (passInput.value.trim() === "") {
        message.push("Password is required");
      }

      if (passInput.value.length >= 20) {
        message.push("Password must be less than 20 characters");
      }

      if (message.length > 0) {
        e.preventDefault();
        cont.innerText = message.join(", ");
      } else {
        cont.innerText = ""; 
      }
    });
  });
  