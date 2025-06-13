// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');

    if (mobileMenuToggle && mobileNav) {
        // Open mobile navigation
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent body scroll
        });

        // Close mobile navigation
        function closeMobileNav() {
            mobileNav.classList.remove('active');
            document.body.style.overflow = ''; // Restore body scroll
        }

        if (mobileNavClose) {
            mobileNavClose.addEventListener('click', closeMobileNav);
        }

        // Close when clicking on overlay
        mobileNav.addEventListener('click', function(e) {
            if (e.target === mobileNav) {
                closeMobileNav();
            }
        });

        // Handle mobile dropdown functionality
        const mobileDropdownTriggers = document.querySelectorAll('.mobile-dropdown-trigger');
        mobileDropdownTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                const dropdown = this.closest('.mobile-dropdown');
                
                // Close other dropdowns
                document.querySelectorAll('.mobile-dropdown').forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
            });
        });

        // Close mobile nav when clicking on a service link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-category-item');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


// Form submission handler
function initContactForm() {
    const contactForm = document.querySelector('#quote');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Show success message
            showNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // In a real implementation, you would send the data to your server
            console.log('Form submitted:', formObject);
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        margin: 0;
    `;
    
    closeButton.addEventListener('click', () => {
        notification.remove();
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    
    .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: white;
        z-index: 9999;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 40px;
        box-sizing: border-box;
        overflow-y: auto;
    }
    
    .nav-menu.active li {
        text-align: center;
        width: 100%;
        max-width: 300px;
    }
    
    .nav-menu.active > li {
        margin-bottom: 10px;
    }
    
    .nav-menu.active a,
    .nav-menu.active .dropdown-trigger {
        color: #333 !important;
        text-shadow: none !important;
        font-size: 1.5rem;
        font-weight: 500;
        text-decoration: none;
        padding: 15px 20px;
        border-radius: 10px;
        transition: all 0.3s ease;
        display: block;
        width: 100%;
        text-align: center;
        cursor: pointer;
    }
    
    .nav-menu.active .dropdown {
        position: relative;
        width: 100%;
    }
    
    .nav-menu.active .dropdown-trigger {
        position: relative;
        background-color: rgba(9, 44, 106, 0.05);
    }
    
    .nav-menu.active .dropdown-trigger:after {
        content: '▼';
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0.8rem;
        transition: transform 0.3s ease;
    }
    
    .nav-menu.active .dropdown.active .dropdown-trigger:after {
        transform: translateY(-50%) rotate(180deg);
    }
    
    .nav-menu.active .dropdown-content {
        display: none;
        background: #f8f9fa;
        border-radius: 10px;
        margin-top: 10px;
        padding: 15px;
        width: 100%;
    }
    
    .nav-menu.active .dropdown.active .dropdown-content {
        display: block;
    }
    
    .nav-menu.active .dropdown-category {
        margin-bottom: 20px;
    }
    
    .nav-menu.active .dropdown-category:last-child {
        margin-bottom: 0;
    }
    
    .nav-menu.active .dropdown-category h4 {
        color: #092c6a !important;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 10px;
        text-align: center;
        padding: 10px;
        background-color: rgba(9, 44, 106, 0.1);
        border-radius: 8px;
    }
    
    .nav-menu.active .category-services {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    
    .nav-menu.active .category-services a {
        font-size: 1rem;
        padding: 8px 15px;
        color: #555 !important;
        background-color: white;
        border-radius: 6px;
        margin-bottom: 5px;
    }
    
    .nav-menu.active a:hover,
    .nav-menu.active .dropdown-trigger:hover {
        color: #092c6a !important;
        background-color: rgba(9, 44, 106, 0.1) !important;
        transform: translateY(-2px);
    }
    
    .nav-menu.active .cta-button {
        background-color: #eb0509 !important;
        color: white !important;
        font-size: 1.3rem;
        font-weight: 600;
        padding: 18px 35px;
        border-radius: 25px;
        margin-top: 20px;
    }
    
    .nav-menu.active .cta-button:hover {
        background-color: #c20408 !important;
        color: white !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(235, 5, 9, 0.3);
    }
    
    .nav-menu.active a.active {
        color: #eb0509 !important;
        font-weight: 600;
        background-color: rgba(235, 5, 9, 0.1);
    }
    
    .mobile-menu-toggle {
        display: none;
        flex-direction: column;
        cursor: pointer;
        position: relative;
        z-index: 10000;
    }
    
    .mobile-menu-toggle span {
        width: 25px;
        height: 3px;
        background-color: #333;
        margin: 3px 0;
        transition: 0.3s;
    }
    
    .navbar-solid .mobile-menu-toggle span {
        background-color: #333;
    }
    
    .mobile-menu-toggle.active {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10001;
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: flex !important;
        }
        
        .nav-menu {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animation observers
function initAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .project-card, .testimonial');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Service card hover effects
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const serviceList = card.querySelector('.service-list');
        
        card.addEventListener('mouseenter', () => {
            if (serviceList) {
                serviceList.style.maxHeight = serviceList.scrollHeight + 'px';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (serviceList) {
                serviceList.style.maxHeight = '200px';
            }
        });
    });
}

// Enhanced lazy loading for images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.classList.add('loaded');
        });
    }
}

// Phone number formatting
function initPhoneFormatting() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 3) {
                value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
            }
            e.target.value = value;
        });
    });
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Project Filter Functionality
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else {
                        const categories = card.getAttribute('data-category');
                        if (categories && categories.includes(filter)) {
                            card.style.display = 'block';
                            card.style.opacity = '1';
                        } else {
                            card.style.opacity = '0';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }
}

// Add loading state to form submission
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Typing effect for hero title
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    const text = 'Precision Maintenance for Every Level – From Ground to Sky';
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            typingElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(typeText, 50); // 50ms delay between characters
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                typingElement.innerHTML = text; // Remove cursor span
                typingElement.classList.add('typing-complete');
            }, 1000);
        }
    }
    
    // Start typing effect after a small delay
    setTimeout(typeText, 500);
}

// Main initialization function
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
    initContactForm();
    initAnimations();
    initServiceCards();
    initLazyLoading();
    initPhoneFormatting();
    initScrollToTop();
    initProjectFilters();
    initTypingEffect();
});