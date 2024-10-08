window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // Adjust offset for header height
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

var typed = new Typed('.multiple-text', {
  strings: ['Full-Stack Dev', 'Web Designer', 'Programmer', 'Student'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

// Light mode & Dark Mode Button

document.querySelector('.mode').addEventListener('click', function () {
  document.body.classList.toggle('lightmode');
});
