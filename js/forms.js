function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function setError(groupId, hasError) {
  document.getElementById(groupId)?.classList.toggle('has-error', hasError);
}

function clearErrors(...ids) {
  ids.forEach(id => setError(id, false));
}

// --- Контактна форма ---
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name  = document.getElementById('inp-name').value.trim();
  const email = document.getElementById('inp-email').value.trim();
  const msg   = document.getElementById('inp-message').value.trim();

  let valid = true;
  setError('fg-name',    !name);               if (!name)               valid = false;
  setError('fg-email',   !validateEmail(email)); if (!validateEmail(email)) valid = false;
  setError('fg-message', !msg);                if (!msg)                valid = false;

  if (!valid) return;

  const params = new URLSearchParams({ name, email, message: msg });
  history.pushState(null, '', '/contact?' + params.toString());

  document.getElementById('successMsg').classList.add('show');
  this.reset();
  clearErrors('fg-name', 'fg-email', 'fg-message');
});

// --- Форма квитка ---
document.getElementById('ticketForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name  = document.getElementById('t-name').value.trim();
  const email = document.getElementById('t-email').value.trim();
  const qty   = document.getElementById('t-qty').value;

  let valid = true;
  setError('tfg-name',  !name);               if (!name)               valid = false;
  setError('tfg-email', !validateEmail(email)); if (!validateEmail(email)) valid = false;

  if (!valid) return;

  const venue  = document.getElementById('ticketVenue').textContent;

  const params = new URLSearchParams({ name, email, venue, qty });
  history.pushState(null, '', '/ticket?' + params.toString());

  document.getElementById('ticketSuccessMsg').classList.add('show');
  this.reset();
  clearErrors('tfg-name', 'tfg-email');
});