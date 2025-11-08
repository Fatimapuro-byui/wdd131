const yearElement = document.getElementById('year');
const lastModifiedElement = document.getElementById('last-modified');

yearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = new Date(document.lastModified).toLocaleString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
    hamburger.textContent = '☰'; 
  } else {
    navMenu.style.display = 'flex';
    hamburger.textContent = '✕'; 
  }
});
