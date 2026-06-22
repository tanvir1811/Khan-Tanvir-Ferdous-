const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
let navLinks = document.querySelectorAll('.mobile-nav-link');

// Toggle hamburger menu
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        hamburgerBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        
        // Set active state for clicked link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideNav = mobileNav.contains(e.target);
    const isClickOnHamburger = hamburgerBtn.contains(e.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && mobileNav.classList.contains('active')) {
        hamburgerBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});



const downloadResumeBtn = document.getElementById('downloadResumeBtn');


downloadResumeBtn.addEventListener('click', async () => {
    const resumeURL = 'resume/IEEE-Volunter_Khan.pdf';
    try {
        const response = await fetch(resumeURL);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'Khan-Tanvir-Ferdous-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(blobUrl);
    } catch (err) {
        // Fallback: just open it if download fails
        window.open(resumeURL, '_blank');
    }
});