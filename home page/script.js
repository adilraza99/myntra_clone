function togglePassword() {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type');
  passwordInput.setAttribute('type', type === 'password' ? 'text' : 'password');
}

// Optional form validation
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill all fields.");
    return;
  }

  // You can replace this with Firebase or backend auth
  alert("Logged in successfully!");
});