window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const mainContent = document.querySelector('.main');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    mainContent.classList.toggle('shifted'); // Add class to shift main content down
});