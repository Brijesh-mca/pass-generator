function generatePassword() {
  let length = parseInt(document.getElementById("length").value);

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";

  let characters = "";
  if (document.getElementById("uppercase").checked)
    characters += uppercaseChars;
  if (document.getElementById("lowercase").checked)
    characters += lowercaseChars;
  if (document.getElementById("numbers").checked) characters += numberChars;
  if (document.getElementById("symbols").checked) characters += symbolChars;

  if (characters.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  document.getElementById("password").innerText = password;
}

// Copy Password
function copyPassword() {
  const passwordText = document.getElementById("password").innerText;
  if (!passwordText) return;

  navigator.clipboard
    .writeText(passwordText)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

// Cursor Tracker (Smooth Movement)
