// Navigation

document.addEventListener("DOMContentLoaded", function () {
    const navHam = document.querySelector(".nav-ham");
    const navItems = document.querySelector(".nav-items");
  
    function toggleNav() {
      navHam.classList.toggle("active");
      navItems.classList.toggle("active");
    }
  
    navHam.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleNav();
    });
  
    document.addEventListener("click", function () {
      if (navHam.classList.contains("active")) {
        navHam.classList.remove("active");
        navItems.classList.remove("active");
      }
    });
  
    navItems.addEventListener("click", function (e) {
      e.stopPropagation();
      navHam.classList.remove("active");
      navItems.classList.remove("active");
    });
  });

// Language toggle functionality
const langButtons = document.querySelectorAll('.lang-btn');
const heroText = document.getElementById('hero-text');
const navItems = document.querySelectorAll('.nav-item');

langButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all language buttons
    langButtons.forEach(btn => btn.classList.remove('active'));
    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Get the selected language
    const lang = button.id;

    // Update text content based on the selected language
    updateLanguage(lang);
  });
});

function updateLanguage(lang) {
  // Update hero text and info
  const translatableElements = document.querySelectorAll('[data-en][data-es]');
  translatableElements.forEach(element => {
      if (lang === 'en') {
          element.innerHTML = element.getAttribute('data-en');
      } else if (lang === 'es') {
          element.innerHTML = element.getAttribute('data-es');
      }
  });
}

// gallery

function openLightbox(img) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = img.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}