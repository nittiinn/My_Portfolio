document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profileIcon');
    const profileMenu = document.getElementById('profileMenu');
    const themeSwitch = document.getElementById('themeSwitch');
    const hamburger = document.querySelector('.hamburger');
    const menubar = document.querySelector('.menubar');

    // Toggle profile menu
    profileIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close profile menu if clicked outside
    document.addEventListener('click', (event) => {
        if (!profileMenu.contains(event.target) && event.target !== profileIcon) {
            profileMenu.style.display = 'none';
        }
    });

    // Toggle dark/light mode
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Toggle Hamburger Menu
    hamburger.addEventListener('click', () => {
        menubar.classList.toggle('active');  // Toggles the 'active' class
        hamburger.classList.toggle('hamburger-active');  // Toggle animation for hamburger icon
    });
});
