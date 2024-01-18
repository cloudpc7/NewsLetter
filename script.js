const form = document.getElementById('signup');
const email = document.getElementById('email');
const emailRegex = new RegExp(/^[a-zA-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4}$/);
const invalidEmail = document.getElementById('invalid-email');
const card = document.getElementById('card');
const success = document.getElementById('success');
const dismiss = document.getElementById('dismiss');

const confirmation = document.getElementById("confirmation")

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const emailAddress = email.value;
  if (!emailRegex.test(emailAddress)) {
    const input = document.querySelectorAll('input')
    input.forEach(input => {
      input.classList.toggle('active');
    })
    invalidEmail.innerHTML = "Valid email required"

  } else {
    card.style.display = "none"
    success.style.display = "flex"
    confirmation.innerHTML = `A confirmation email has been sent to <b>${emailAddress}</b>. Please open it and click the button inside to confirm your subscription.`
    email.value = ""
  }
})

dismiss.addEventListener('click', function() {
  card.style.display = "flex"
  success.style.display = "none"
  email.value=""
})