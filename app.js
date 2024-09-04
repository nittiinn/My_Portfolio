document.addEventListener('DOMContentLoaded', () => {
    const profileLogo = document.getElementById('profile-logo');
    const profileDropdown = document.getElementById('profile-dropdown');
    const dayNightToggle = document.getElementById('day-night-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    profileLogo.addEventListener('click', () => {
        profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    });

    dayNightToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
        document.body.classList.toggle('day-mode');
        dayNightToggle.textContent = document.body.classList.contains('night-mode') ? '🌙' : '🔅';
    });

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });


    document.addEventListener('click', (event) => {
        if (!profileLogo.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.style.display = 'none';
        }
    });
});