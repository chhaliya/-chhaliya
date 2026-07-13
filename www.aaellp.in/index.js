document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Optional: Change burger icon to 'X' when open
            if (navLinks.classList.contains('active')) {
                menuToggle.innerHTML = '✕';
            } else {
                menuToggle.innerHTML = '☰';
            }
        });

        // Close menu when a link is clicked (useful for smooth scrolling on single-page sites)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '☰';
            });
        });
    }

    // --- 2. Dark / Light Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const modeIcon = themeToggle?.querySelector('.mode-icon');

    // Check for saved theme preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        if (modeIcon) modeIcon.textContent = '☀️'; // Sun icon for dark mode
    } else {
        document.body.classList.remove('dark-mode');
        if (modeIcon) modeIcon.textContent = '🌙'; // Moon icon for light mode
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            
            if (modeIcon) {
                modeIcon.textContent = isDarkMode ? '☀️' : '🌙';
            }
        });
    }
});