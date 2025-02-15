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

// function openLightbox(img) {
//   document.getElementById('lightbox').style.display = 'flex';
//   document.getElementById('lightbox-img').src = img.src;
// }

// function closeLightbox() {
//   document.getElementById('lightbox').style.display = 'none';
// }

// document.addEventListener("DOMContentLoaded", function () {
//   var swiper = new Swiper(".mySwiper", {
//     loop: true, // Enables infinite scrolling
//     autoplay: {
//       delay: 3000, // Auto-slide every 3 seconds
//       disableOnInteraction: false,
//     },
//     slidesPerView: 1, // Show one image at a time
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     lazy: true, // Lazy loading images
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 3, // Show 3 slides at a time
    spaceBetween: 1, // Adds space between slides
    centeredSlides: true, // Centers active slide
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    lazy: true,
    breakpoints: {
      900: { slidesPerView: 3 }, // On larger screens, show 3 images
      300: { slidesPerView: 1 }, // On mobile, show only 1 image
    },
  });
});

// History section

document.addEventListener("DOMContentLoaded", function() {
  const images = ["./img/Gallery/Papel_0078.jpg", "./img/Gallery/Papel_0079.jpg", "./img/Gallery/Papel_0080.jpg", "./img/Gallery/Papel_0081.jpg", "./img/Gallery/Papel_0082.jpg", "./img/Gallery/Papel_0083.jpg", "./img/Gallery/Papel_0084.jpg"];
  let index = 0;
  const imgElement = document.getElementById("history-image");
  
  function changeImage() {
      index = (index + 1) % images.length;
      imgElement.style.opacity = 0;
      setTimeout(() => {
          imgElement.src = images[index];
          imgElement.style.opacity = 1;
      }, 500);
  }
  
  setInterval(changeImage, 5000);
});


document.addEventListener("scroll", function () {
  const historySection = document.querySelector(".section");
  const overlay = document.querySelector(".overlay");

  const sectionTop = historySection.getBoundingClientRect().top;

  if (sectionTop <= window.innerHeight / 2) {
      overlay.style.background = "rgba(0, 0, 0, 0.6)"; 
  } else {
      overlay.style.background = "rgba(0, 0, 0, 0.2)"; 
  }
});