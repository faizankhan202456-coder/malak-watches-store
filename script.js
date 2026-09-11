document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var form = document.getElementById('contactForm');
  if (form) {
    var successNote = document.getElementById('successNote');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var message = document.getElementById('message');

      var nameError = form.querySelector('[data-error-for="name"]');
      var emailError = form.querySelector('[data-error-for="email"]');
      var messageError = form.querySelector('[data-error-for="message"]');

      [nameError, emailError, messageError].forEach(function (el) {
        if (el) el.classList.remove('show');
      });
      if (successNote) successNote.classList.remove('show');

      if (!name.value.trim()) {
        nameError.classList.add('show');
        valid = false;
      }
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        emailError.classList.add('show');
        valid = false;
      }
      if (!message.value.trim()) {
        messageError.classList.add('show');
        valid = false;
      }

      if (!valid) return;

      if (successNote) successNote.classList.add('show');
      form.reset();
    });
  }
});
