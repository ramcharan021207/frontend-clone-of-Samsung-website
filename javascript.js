// Hero Banner Scale Animation on Scroll
document.addEventListener('DOMContentLoaded', function() {
  const heroBanner = document.querySelector('.hero-banner');
  const heroBanner2 = document.querySelector('.hero-banner-2');
  const heroBannerVideo = document.querySelector('.hero-banner-video');
  
  window.addEventListener('scroll', function() {
    // Get the scroll position
    const scrollPosition = window.scrollY;
    
    // Calculate scale: starts at 1 (full size) and scales down as user scrolls
    // After 500px of scroll, it will be at 0.95 (95% size)
    const maxScroll = 500;
    const minScale = 0.95;
    const scale = Math.max(minScale, 1 - (scrollPosition / maxScroll) * (1 - minScale));
    
    // Apply the scale transform to first hero banner
    if (heroBanner) {
      heroBanner.style.transform = `scale(${scale})`;
      heroBanner.style.transformOrigin = 'center top';
    }
    
    // Apply the scale transform to second hero banner
    if (heroBanner2) {
      heroBanner2.style.transform = `scale(${scale})`;
      heroBanner2.style.transformOrigin = 'center top';
    }
    
    // Apply the scale transform to video hero banner
    if (heroBannerVideo) {
      heroBannerVideo.style.transform = `scale(${scale})`;
      heroBannerVideo.style.transformOrigin = 'center top';
    }
  });

  // Search Modal Functionality
  const searchIcon = document.querySelector('.search-icon');
  const searchModal = document.getElementById('searchModal');
  const closeSearchBtn = document.querySelector('.close-search');
  const searchInput = document.querySelector('.search-input');

  // Open search modal
  if (searchIcon) {
    searchIcon.addEventListener('click', function(e) {
      e.preventDefault();
      searchModal.classList.add('active');
      searchInput.focus();
    });
  }

  // Close search modal
  if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', function() {
      searchModal.classList.remove('active');
    });
  }

  // Close modal when clicking outside the content
  searchModal.addEventListener('click', function(e) {
    if (e.target === searchModal) {
      searchModal.classList.remove('active');
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      searchModal.classList.remove('active');
    }
  });
});
const searchInput = document.querySelector(".search-input");
const suggestionsBox = document.querySelector(".search-suggestions");

const suggestions = [
  "Samsung Galaxy S25",
  "Samsung Galaxy S25 Ultra",
  "Samsung Galaxy S24",
  "Samsung Galaxy Buds",
  "Samsung TV",
  "Samsung Refrigerator",
  "Samsung Washing Machine",
  "Samsung Monitor"
];

searchInput.addEventListener("input", function () {
  const value = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (value === "") return;

  const filtered = suggestions.filter(item =>
    item.toLowerCase().includes(value)
  );

  filtered.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;

    li.addEventListener("click", function () {
      searchInput.value = item;
      suggestionsBox.innerHTML = "";
    });

    suggestionsBox.appendChild(li);
  });
});
const profileIcon = document.querySelector(".profile-icon");
const profileMenu = document.querySelector(".profile-menu");

profileIcon.addEventListener("click", function(e) {
  e.preventDefault();
  profileMenu.classList.toggle("active");
});

document.addEventListener("click", function(e) {
  if (!profileIcon.contains(e.target) && !profileMenu.contains(e.target)) {
    profileMenu.classList.remove("active");
  }
});
