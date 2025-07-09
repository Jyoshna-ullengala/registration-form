document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const course = document.getElementById('course').value;

  if (!fullName || !email || !dob || !gender || !course) {
    document.getElementById('message').textContent = 'Please fill in all fields.';
    document.getElementById('message').style.color = 'red';
    return;
  }

  document.getElementById('message').textContent = 'Registration Successful!';
  document.getElementById('message').style.color = 'green';

  // Reset form after a short delay
  setTimeout(() => {
    document.getElementById('registrationForm').reset();
    document.getElementById('message').textContent = '';
  }, 3000);
});
