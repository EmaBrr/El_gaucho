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

//   Languages

// const languages = {
//     en: {
//         title: "Welcome",
//         description: "This is an English description.",
//         nav: {
//             about: "About Us",
//             gallery: "Gallery",
//             contact: "Contact Us"
//         }
//     },
//     es: {
//         title: "Bienvenido",
//         description: "Esta es una descripción en español.",
//         nav: {
//             about: "Sobre Nosotros",
//             gallery: "Galería",
//             contact: "Contáctenos"
//         }
//     }
// };

// // Selecting the language buttons and content elements
// const enButton = document.getElementById('en');
// const esButton = document.getElementById('es');
// const title = document.getElementById('title');
// const description = document.getElementById('description');

// // Function to update language content
// function switchLanguage(lang) {
//     title.textContent = languages[lang].title;
//     description.textContent = languages[lang].description;

//     // Update the navigation items
//     const navItems = document.querySelectorAll('.nav-items a');
//     navItems.forEach(item => {
//         const enText = item.getAttribute('data-en');
//         const esText = item.getAttribute('data-es');
//         item.textContent = lang === 'en' ? enText : esText;
//     });

//     // Highlight active language button
//     enButton.classList.toggle('active', lang === 'en');
//     esButton.classList.toggle('active', lang === 'es');
// }

// // Event listeners to switch languages
// enButton.addEventListener('click', () => switchLanguage('en'));
// esButton.addEventListener('click', () => switchLanguage('es'));

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

// function updateLanguage(lang) {
//   // Update hero text
//   if (lang === 'en') {
//     heroText.textContent = 'Restaurant. Grill. Wines.';
//   } else if (lang === 'es') {
//     heroText.textContent = 'Restaurante. Parilla. Vinos.';
//   }

//   // Update navigation links
//   navItems.forEach(item => {
//     const enText = item.getAttribute('data-en');
//     const esText = item.getAttribute('data-es');
    
//     // Switch the text content of the nav items based on the language
//     if (lang === 'en') {
//       item.textContent = enText;
//     } else if (lang === 'es') {
//       item.textContent = esText;
//     }
//   });
// }

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