document.addEventListener('DOMContentLoaded', () => {
    const profileLogo = document.getElementById('profile-logo');
    const profileDropdown = document.getElementById('profile-dropdown');
    const toggle = document.querySelector('.toggle-input');
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');
  
    // Set initial state based on localStorage
    const initialState = localStorage.getItem('toggleState') === 'true';
    toggle.checked = initialState;
    if (initialState) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  
    // Profile dropdown toggle
    profileLogo.addEventListener('click', () => {
      profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    });
  
    // Menu toggle
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  
    // Hide dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!profileLogo.contains(event.target) && !profileDropdown.contains(event.target)) {
        profileDropdown.style.display = 'none';
      }
    });
  
    // Handle theme toggle
    toggle.addEventListener('change', () => {
      const isNightMode = toggle.checked;
      if (isNightMode) {
        document.body.classList.add('night-mode');
      } else {
        document.body.classList.remove('night-mode');
      }
      localStorage.setItem('toggleState', toggle.checked);
    });
  });
  
