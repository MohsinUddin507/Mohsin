// Form Handling
const initFormHandling = () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            message: form.querySelector('#message').value
        };

        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
};