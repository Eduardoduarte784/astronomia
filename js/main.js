menuButton = document.getElementById('menu');
menuButton.addEventListener('click', toggleMenu);
adminEmail = 'admin123@example.com';

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('--active');
}

function sendContactMail() {
  let email = document.querySelector("#email").value;
  let body = document.querySelector("#body").value;
  let subject = document.querySelector("#subject").value;

  window.location.href = `mailto:${email}?body=${body}&subject=${subject}`;
}

function onClickSubmit(event) {
  let password = document.querySelector("#password").value;
  let confirmationPassword = document.querySelector("#passwordConfirmation").value;
  
  if (password !== confirmationPassword) {
      event.preventDefault();
      event.stopPropagation();
      alert("A senha e a confirmação estão diferentes!");
  }
}