const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

// Toggle the visibility of the navbar links when the toggle button is clicked
navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Close the navbar when clicking outside the navbar area
document.body.addEventListener('click', (e) => {
  if (!navbarToggle.contains(e.target) && !navbarLinks.contains(e.target)) {
    navbarLinks.classList.remove('active');
  }
});

// Handle click on navbar links, toggle active class
navbarLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    document.querySelectorAll('.navbar-links a').forEach(link => link.classList.remove('active'));

    // Toggle navbar links visibility on small screens
    navbarLinks.classList.remove('active');
    e.target.classList.add('active');
  }
});

// Scroll function to fix navbar on scroll
function scrollFunction() {
  if (window.scrollY > 1) {
    document.querySelector('.navbar').classList.add('fixed-nav');
  } else {
    document.querySelector('.navbar').classList.remove('fixed-nav');
}
}
// Attach the scroll function to the window scroll event
window.addEventListener('scroll', scrollFunction);

// Initial call to handle page load state
scrollFunction();


// submenu 
const banner2Img = document.getElementById('banner2-img')
// const banner2Img = document.querySelectorAll('.banner img')
const img = [
  'https://img.freepik.com/premium-photo/tow-truck-transporter-carrying-car-road-slovenia_250132-26269.jpg?ga=GA1.1.572590152.1728395548&semt=ais_keywords_boost',
   './services1.jpg', './service7.jpg', './service7.jpg'];
let index = 0;
setInterval(() => {
  banner2Img.src = img[index];
  // index = (index + 1) % img.length;
  if(index === img.length - 1) {
    index = 0;
  } else {
    index++;
  }
}, 2000);

// loader js 
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("page-loader");

  // Show the loader
  loader.style.display = "block"; 

  // Hide the loader after 2 seconds
  setTimeout(function () {
    loader.style.display = "none";
  }, 2000); // 2000 milliseconds = 2 seconds

  const text = "FORKLIFT AND RECOVERY RENTAL SERVICES";
  const typingText = document.getElementById("typing-text");
  const cursor = document.querySelector(".cursor");

  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust typing speed (100ms per character)
    } else {
      cursor.style.display = "none"; // Hide cursor after typing is complete
    }
  }

  type(); // Start the typing effect
});


// slider code 
const feedbackContainer = document.querySelector('.feedback-container');
const feedbackItems = document.querySelectorAll('.feedback-item');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentIndex = 0;
const itemsToShow = 2; // Number of items to show at once
const itemWidth = feedbackItems[0].offsetWidth + 20; // Item width including margin
const totalItems = feedbackItems.length;
 
function updateSliderPosition() {
    const offset = -currentIndex * itemWidth;
    feedbackContainer.style.transform = `translateX(${offset}px)`;
}

function slideLeft() {
    if (currentIndex > 0) {
      currentIndex -= 1; // Changed from itemsToShow to 1
      updateSliderPosition();
    }
  }
  

  function slideRight() {
    if (currentIndex < totalItems - itemsToShow) {
      currentIndex += itemsToShow;
      updateSliderPosition();
    } else {
      currentIndex = 0; // Reset currentIndex to 0 when reaching the end
      updateSliderPosition();
    }
  }
  function slideRightSlow() {
    if (currentIndex < totalItems - 3) {
      currentIndex += 1;  
      updateSliderPosition();
    } else {
      currentIndex = 0; // Reset currentIndex to 0 when reaching the end
      updateSliderPosition();
    }
  }
  
  let isAutomaticSliding = true;
  let timeoutId;
  
  setInterval(() => {
    if (isAutomaticSliding) {
      slideRightSlow();
    } 
    // if (!isAutomaticSliding) {
    //   slideLeft();
    // } 
  }, 3000);
  
  leftBtn.addEventListener('click', () => {
    isAutomaticSliding = false;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      isAutomaticSliding = true;
    }, 4000); // Resume automatic sliding after 10 seconds
    slideLeft();
  });
  
  rightBtn.addEventListener('click', () => {
    isAutomaticSliding = false;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      isAutomaticSliding = true;
    }, 4000); // Resume automatic sliding after 10 seconds
    slideRight();
  });
  
// Set the initial position
updateSliderPosition();
