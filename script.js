document.addEventListener('DOMContentLoaded', () => {
    // Modal Elements
    const modal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeBtn = document.querySelector('.close-btn');

    // Open Modal
    loginBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close Modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Leave Form Submission
    const leaveForm = document.getElementById('leaveForm');
    leaveForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic data gathering
        const studentName = document.getElementById('studentName').value;
        const fromDate = document.getElementById('fromDate').value;
        const toDate = document.getElementById('toDate').value;

        // Simple feedback
        alert(`Thank you, ${studentName}! Your leave application from ${fromDate} to ${toDate} has been submitted successfully and is under review.`);
        
        // Reset form
        leaveForm.reset();
    });

    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        
        // Simple feedback
        alert(`Welcome back, ${username}! Login successful.`);
        
        // Close modal and reset form
        modal.style.display = 'none';
        loginForm.reset();
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Scroll Animation for Fee Cards
    const cards = document.querySelectorAll('.fee-card');
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = entry.target.classList.contains('featured') ? 'scale(1.05) translateY(0)' : 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
