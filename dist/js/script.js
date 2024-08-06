// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function(e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }


// Navbar Active
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#nav-menu a');

  window.addEventListener('scroll', function() {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Offset untuk penyesuaian
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('navbar-active');
      link.style.color = '';

      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('navbar-active');

        // Atur warna untuk mode terang dan gelap
        if (document.documentElement.classList.contains('dark')) {
          link.style.color = '#0EA5E9';
        } else {
          link.style.color = '#0EA5E9';
        }
      }
    });
  });
});