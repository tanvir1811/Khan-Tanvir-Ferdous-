navLinks = document.querySelectorAll('.mobile-nav-link');



const sections = document.querySelectorAll('.content-section');
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            updateActiveNavLink(sectionId);
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

function updateActiveNavLink(sectionId) {
    navLinks.forEach(link => {
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===========================
// SCROLL TO TOP BUTTON (Optional)
// ===========================

let scrollToTopBtn = null;

function createScrollToTopBtn() {
    scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 20px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: linear-gradient(90deg, #0066ff, #00d4ff);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 90;
        box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

createScrollToTopBtn();

window.addEventListener('scroll', () => {
    if (scrollToTopBtn) {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }
});


if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

const touchElements = document.querySelectorAll('.btn-primary, .social-btn, .activity-link, .project-link, .tag');

touchElements.forEach(element => {
    element.addEventListener('touchstart', function() {
        this.style.opacity = '0.8';
    });

    element.addEventListener('touchend', function() {
        this.style.opacity = '1';
    });
});

// ===========================
// FORM VALIDATION & INTERACTION
// ===========================

// Prevent double tap zoom on buttons
document.addEventListener('touchstart', function(e) {
    if (e.target.matches('button, a, [role="button"]')) {
        e.target.style.userSelect = 'none';
    }
}, { passive: true });

// ===========================
// ACCESSIBILITY
// ===========================

// Focus visible for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('click', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===========================
// PAGE VISIBILITY API
// ===========================

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden - pause animations/auto-play
        if (slider) {
            // You could pause the slider here if needed
        }
    } else {
        // Page is visible - resume animations/auto-play
        if (slider) {
            // You could resume the slider here if needed
        }
    }
});

// ===========================
// VIEWPORT HEIGHT FIX (For Mobile Browsers)
// ===========================

function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);

// ===========================
// NETWORK STATUS
// ===========================

window.addEventListener('online', () => {
    console.log('Back online!');
});

window.addEventListener('offline', () => {
    console.log('You are offline!');
});

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Mobile portfolio loaded');
    
    // Set initial active nav link
    updateActiveNavLink('about');
});

// ===========================
// SERVICE WORKER (Optional - for PWA)
// ===========================

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
        console.log('Service Worker registration failed:', err);
    });
}



function openme(mylink){
     
window.open(mylink)

}