// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initLoadingAnimation();
    
    // Initialize typing effect
    initTypingEffect();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize form handling
    initFormHandling();
    
    // Initialize Lucide icons
    lucide.createIcons();
});

// Export all initialization functions
window.initLoadingAnimation = initLoadingAnimation;
window.initTypingEffect = initTypingEffect;
window.initSmoothScroll = initSmoothScroll;
window.initMobileNav = initMobileNav;
window.initFormHandling = initFormHandling;