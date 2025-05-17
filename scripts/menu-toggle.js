// Updated menu-toggle.js
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.toggle-menu-icon');
  const navMenu = document.querySelector('#navigation ul');
  
  // Toggle menu when hamburger icon is clicked
  if (menuIcon) {
    menuIcon.addEventListener('click', function() {
      navMenu.classList.toggle('show');
      menuIcon.classList.toggle('active');
      console.log('Menu toggled'); // Debug message
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.toggle-menu-icon') && 
        !event.target.closest('#navigation ul') && 
        navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      menuIcon.classList.remove('active');
    }
  });
  
  // Close menu when window is resized to desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      menuIcon.classList.remove('active');
    }
  });
});


