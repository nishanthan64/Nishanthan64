const form = document.getElementById('regForm');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const course = document.getElementById('course').value;

  if(course === "") {
    alert("Please select a course.");
    return;
  }

  result.innerHTML = `
    <h3>Registration Successful!</h3>
    <div class="result-item"><strong>Name:</strong> ${name}</div>
    <div class="result-item"><strong>Email:</strong> ${email}</div>
    <div class="result-item"><strong>Phone:</strong> ${phone}</div>
    <div class="result-item"><strong>Course:</strong> ${course}</div>
  `;

  result.style.display = 'block';
  form.reset();
});
