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
        menubar.classList.toggle('active');  
        hamburger.classList.toggle('hamburger-active');  // Toggle animation for hamburger icon
    });
});


const words = ["Developer", "Web Designer", "Coder"];
const colors = ["#FF5733", "#33C1FF", "#28A745"]; 
let currentIndex = 0;

function startSlideshow() {
    const slideshowElement = document.getElementById("slideshow");
    const slideElement = document.createElement("div");
    slideElement.className = "slide";
    slideElement.innerText = words[currentIndex];  // Set initial word
    slideElement.style.color = colors[currentIndex];  // Set initial color
    slideshowElement.appendChild(slideElement);

    setInterval(() => {
        // Slide the current word out
        slideElement.style.transform = 'translateY(100%)';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            slideElement.innerText = words[currentIndex];
            slideElement.style.color = colors[currentIndex];  
            slideElement.style.transform = 'translateY(-100%)';  
            
            
            setTimeout(() => {
                slideElement.style.transform = 'translateY(0)'; 
            }, 50);
        }, 500); 
    }, 3000);  
}

document.addEventListener("DOMContentLoaded", startSlideshow);
