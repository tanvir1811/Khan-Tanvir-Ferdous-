const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
let about1 = document.getElementById("about");

let previousSection = '';
let scrollDirection = 'down';
let lastScrollTop = 0;

function setActiveNavLink() {
    let current = '';
    
    scrollDirection = window.pageYOffset > lastScrollTop ? 'down' : 'up';
    lastScrollTop = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.pageYOffset >= sectionTop - 400) {
            current = section.getAttribute('id');
        }
    });

    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        
        if (sectionId === current) {
            section.classList.remove('hide', 'hide-up', 'hide-down');
            section.classList.add('show');
        } else {
            section.classList.remove('show');
            
            if (scrollDirection === 'down') {
                section.classList.add('hide-up');
            } else {
                section.classList.add('hide-down');
            }
        }
    });

   navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop + 900 - 1000;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
}

setActiveNavLink();


window.addEventListener('scroll', setActiveNavLink);
window.addEventListener("DOMContentLoaded",()=>{
    const offsetTop1 = about1.offsetTop + 900 - 1000;
            window.scrollTo({
                top: offsetTop1,
                behavior: 'smooth'
            });
})

function openme(mylink){
     
window.open(mylink)

}