// Loading Animation
const initLoadingAnimation = () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.getElementById('loading-text');
    const text = "Welcome to Portfolio";
    let charIndex = 0;

    const typeText = () => {
        if (charIndex < text.length) {
            loadingText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                document.body.classList.remove('loading');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    initScrollAnimations();
                }, 500);
            }, 500);
        }
    };

    typeText();
};

// Scroll Animations
const initScrollAnimations = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
};
