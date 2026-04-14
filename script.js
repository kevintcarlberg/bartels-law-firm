// ===================================
// NAVIGATION
// ===================================

const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Smooth scroll and close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Only prevent default for hash links (internal page navigation)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ===================================
// FORM HANDLING
// ===================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // In a real application, you would send this data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', data);
    
    // Create mailto link (temporary solution - replace with actual form handling)
    const subject = encodeURIComponent(`Legal Inquiry: ${data.subject}`);
    const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n\n` +
        `Message:\n${data.message}`
    );
    
    window.location.href = `mailto:contact@bartelslegal.com?subject=${subject}&body=${body}`;
    
    // Show success message
    showNotification('Thank you for your message. We will contact you shortly.');
    
    // Reset form
    contactForm.reset();
});

// ===================================
// NOTIFICATION SYSTEM
// ===================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, #d4a574, #c89960);
        color: #0a1628;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    /* Mobile menu styles */
    @media (max-width: 968px) {
        .nav-menu {
            display: flex;
            position: fixed;
            top: 80px;
            right: -100%;
            width: 280px;
            height: calc(100vh - 80px);
            background: rgba(10, 22, 40, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border-left: 1px solid rgba(212, 165, 116, 0.2);
            box-shadow: -4px 0 16px rgba(0, 0, 0, 0.4);
        }
        
        .nav-menu.active {
            right: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }
        
        .nav-menu li {
            width: 100%;
        }
        
        .nav-link {
            display: block;
            padding: 0.75rem 0;
            font-size: 1.1rem;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateOnScroll = document.querySelectorAll(
    '.feature-card, .credential-item, .practice-card, .contact-item, .result-card, .testimonial-card, .membership-item'
);

animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===================================
// ACTIVE LINK HIGHLIGHTING
// ===================================

const sections = document.querySelectorAll('section[id]');

function highlightActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveLink);

// Add active link style
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-link.active {
        color: var(--accent-gold);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeStyle);

// ===================================
// STATS COUNTER ANIMATION
// ===================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const isPercent = target === 100;
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = isPercent ? '100%' : `${target}+`;
            clearInterval(timer);
        } else {
            element.textContent = isPercent 
                ? `${Math.floor(start)}%` 
                : `${Math.floor(start)}+`;
        }
    }, 16);
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            if (statNumbers.length >= 4) {
                // Animate: 17+, $50M+, 500+, F500
                statNumbers[0].textContent = '17+';
                
                // Animate $50M+
                let millions = 0;
                const millionTimer = setInterval(() => {
                    millions += 2;
                    if (millions >= 50) {
                        statNumbers[1].textContent = '$50M+';
                        clearInterval(millionTimer);
                    } else {
                        statNumbers[1].textContent = `$${millions}M+`;
                    }
                }, 40);
                
                // Animate 500+
                animateCounter(statNumbers[2], 500);
                
                // F500 stays fixed
                statNumbers[3].textContent = 'F500';
            }
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(highlightActiveLink, 10));

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================

// Keyboard navigation for mobile menu
mobileMenuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mobileMenuToggle.click();
    }
});

// Focus trap for mobile menu when open
navMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.focus();
    }
});

// ===================================
// SCROLL TO TOP BUTTON (Optional Enhancement)
// ===================================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--accent-gold), #c89960);
    color: var(--primary-dark);
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(212, 165, 116, 0.4);
    z-index: 999;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', debounce(() => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
}, 10));

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
});

// ===================================
// SCROLL PROGRESS INDICATOR
// ===================================

const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.pageYOffset;
    const progress = (scrolled / documentHeight) * 100;
    
    if (scrollProgress) {
        scrollProgress.style.width = progress + '%';
    }
});

// ===================================
// TRUST STATS COUNTER ANIMATION
// ===================================

let countersAnimated = false;

function animateCounters() {
    if (countersAnimated) return; // Only animate once
    countersAnimated = true;
    
    const trustStatNumbers = document.querySelectorAll('.trust-stat-number');
    
    trustStatNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        // Start from 0
        stat.textContent = '0';
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Trigger trust stats animation when section comes into view
const trustSection = document.querySelector('.trust-mini-section');
if (trustSection) {
    const trustObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                trustObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Lower threshold so it triggers earlier
    
    trustObserver.observe(trustSection);
}

console.log('Bartels Law Firm website loaded successfully!');
