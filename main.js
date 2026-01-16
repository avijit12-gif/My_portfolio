// Typewriter effect
const typewriterElement = document.getElementById('typewriter');
const professions = [
  'Cybersecurity Enthusiast',
  'Learning Ethical Hacker',
  'Learning Security Analyst',
  'Learning Penetration Tester'
];
let i = 0, j = 0, currentProfession = '', isDeleting = false, isEnd = false;

function typeWriter() {
  isEnd = false;
  currentProfession = professions[i];
  if (isDeleting) {
    typewriterElement.innerHTML = currentProfession.substring(0, j - 1);
    j--;
  } else {
    typewriterElement.innerHTML = currentProfession.substring(0, j + 1);
    j++;
  }
  if (!isDeleting && j === currentProfession.length) {
    isEnd = true;
    isDeleting = true;
    setTimeout(typeWriter, 2000);
    return;
  }
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % professions.length;
    setTimeout(typeWriter, 500);
    return;
  }
  setTimeout(typeWriter, isDeleting ? 100 : isEnd ? 2000 : 140);
}
typeWriter();

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    mobileMenu.classList.add('hidden');
  });
});

// Contact form alert
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});

