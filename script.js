// ===================================
// AUDIENCE SWITCHING FUNCTIONALITY
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const recruiterBtn = document.querySelector('[data-audience="recruiter"]');
    const clientBtn = document.querySelector('[data-audience="client"]');
    const recruiterPath = document.querySelector('[data-path="recruiter"]');
    const clientPath = document.querySelector('[data-path="client"]');
    const dynamicHeadline = document.getElementById('dynamicHeadline');
    
    // Headlines for each audience
    const headlines = {
        recruiter: 'Transforming healthcare data into enterprise-grade analytics platforms that drive strategic decision-making',
        client: 'Delivering governed analytics solutions that empower executive decision-making in complex healthcare environments'
    };
    
    // Current active path
    let activePath = null;
    
    // Function to switch audience view
    function switchAudience(audience) {
        if (activePath === audience) return;
        
        activePath = audience;
        
        // Update button states
        if (audience === 'recruiter') {
            recruiterBtn.classList.add('btn-primary');
            recruiterBtn.classList.remove('btn-secondary');
            clientBtn.classList.remove('btn-primary');
            clientBtn.classList.add('btn-secondary');
            
            // Show recruiter path, hide client path
            recruiterPath.classList.remove('hidden');
            clientPath.classList.add('hidden');
            
            // Update headline
            updateHeadline(headlines.recruiter);
        } else {
            clientBtn.classList.add('btn-primary');
            clientBtn.classList.remove('btn-secondary');
            recruiterBtn.classList.remove('btn-primary');
            recruiterBtn.classList.add('btn-secondary');
            
            // Show client path, hide recruiter path
            clientPath.classList.remove('hidden');
            recruiterPath.classList.add('hidden');
            
            // Update headline
            updateHeadline(headlines.client);
        }
        
        // Smooth scroll to content
        const targetSection = audience === 'recruiter' ? recruiterPath : clientPath;
        setTimeout(() => {
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }, 100);
    }
    
    // Function to update headline with subtle transition
    function updateHeadline(newText) {
        if (!dynamicHeadline) return;
        
        dynamicHeadline.style.opacity = '0';
        dynamicHeadline.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            dynamicHeadline.textContent = newText;
            dynamicHeadline.style.opacity = '1';
            dynamicHeadline.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Add headline transition styles
    if (dynamicHeadline) {
        dynamicHeadline.style.transition = 'opacity 300ms ease, transform 300ms ease';
    }
    
    // Event listeners
    if (recruiterBtn) {
        recruiterBtn.addEventListener('click', () => switchAudience('recruiter'));
    }
    
    if (clientBtn) {
        clientBtn.addEventListener('click', () => switchAudience('client'));
    }
    
    // Initialize with default view (both paths hidden initially)
    if (recruiterPath) recruiterPath.classList.add('hidden');
    if (clientPath) clientPath.classList.add('hidden');
});


// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});


// ===================================
// ANIMATED NUMBER COUNTING
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    const animateCount = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCount = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = target;
            }
        };
        
        updateCount();
    };
    
    // Use Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
});


// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all section blocks for fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-block');
    sections.forEach((section, index) => {
        observer.observe(section);
        
        // Stagger animations
        section.style.transitionDelay = `${index * 0.1}s`;
    });
});


// ===================================
// BUTTON HOVER EFFECTS ENHANCEMENT
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.25s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.25s ease';
        });
    });
});


// ===================================
// CASE STUDY VISUAL PLACEHOLDERS
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const visualPlaceholders = document.querySelectorAll('.visual-placeholder');
    
    visualPlaceholders.forEach(placeholder => {
        // Add subtle hover effect
        placeholder.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});


// ===================================
// CARD TILT EFFECT
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-category, .service-card, .value-item, .engagement-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
});


// ===================================
// TYPING EFFECT FOR HEADLINE (Optional enhancement)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const headline = document.getElementById('dynamicHeadline');
    if (!headline) return;
    
    const originalText = headline.textContent;
    headline.innerHTML = '';
    
    let i = 0;
    const typeSpeed = 30;
    
    function typeWriter() {
        if (i < originalText.length) {
            headline.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
});
