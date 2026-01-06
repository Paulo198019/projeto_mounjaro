
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if (el) { e.preventDefault(); el.scrollIntoView({behavior: 'smooth'}); }
}));

const form = document.querySelector('form[name="lead"]');
if (form) {
  form.addEventListener('submit', (e) => {
    const consent = form.querySelector('.consent input[type="checkbox"]');
    if (!consent.checked) {
      e.preventDefault();
      alert('Por favor, aceite o consentimento LGPD para prosseguir.');
    }
  });
}
