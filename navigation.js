// Smooth Scrolling
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Mobile Navigation
const initMobileNav = () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    menuBtn?.addEventListener('click', () => {
        nav?.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav?.classList.remove('active');
            menuBtn?.classList.remove('active');
        });
    });
};