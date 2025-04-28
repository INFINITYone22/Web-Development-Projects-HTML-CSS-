document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Portfolio Filtering
    const filterButtons = document.querySelectorAll('#portfolio-filter-controls .filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and add to current button
            filterButtons.forEach(btn => btn.classList.remove('active-filter'));
            this.classList.add('active-filter');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.dataset.category.includes(filterValue)) {
                    item.style.display = 'block'; // Or 'grid' depending on your layout
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Contact Form Validation (Client-Side)
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const submissionSuccess = document.getElementById('submission-success');
    const submissionError = document.getElementById('submission-error');


    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Name Validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Message Validation
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please enter your message.';
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }

        if (isValid) {
            // Simulate form submission success (replace with actual AJAX submission later)
            submissionSuccess.style.display = 'block';
            submissionError.style.display = 'none';
            contactForm.reset(); // Clear the form

            // In a real scenario, you would use fetch() or XMLHttpRequest to send the data to the server.
            // Example (replace with your server-side endpoint):
            /*
            fetch('/contact-form-handler.php', { // Or your server endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Or 'application/json' if sending JSON
                },
                body: new URLSearchParams(new FormData(contactForm)) // Or JSON.stringify for JSON
            })
            .then(response => {
                if (response.ok) {
                    submissionSuccess.style.display = 'block';
                    submissionError.style.display = 'none';
                    contactForm.reset();
                } else {
                    submissionError.style.display = 'block';
                    submissionSuccess.style.display = 'none';
                }
            })
            .catch(error => {
                submissionError.style.display = 'block';
                submissionSuccess.style.display = 'none';
                console.error('Error submitting form:', error);
            });
            */

        } else {
            submissionError.style.display = 'none'; // Ensure success message is hidden if there are validation errors
            submissionSuccess.style.display = 'none';
        }
    });
});