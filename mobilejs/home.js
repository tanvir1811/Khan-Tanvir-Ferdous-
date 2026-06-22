class ImageSlider {
    constructor() {
        this.slider = document.getElementById('slider');
        this.slides = document.querySelectorAll('.slider-img');
        this.dotsContainer = document.getElementById('sliderDots');
        this.currentSlide = 0;
        
        this.init();
    }

    init() {
        this.createDots();
        this.autoSlide();
    }

    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }

    showSlide(index) {
        // Remove active class from all slides and dots
        this.slides.forEach(slide => slide.classList.remove('active'));
        document.querySelectorAll('.slider-dot').forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        this.slides[index].classList.add('active');
        document.querySelectorAll('.slider-dot')[index].classList.add('active');
    }

    goToSlide(index) {
        this.currentSlide = index % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    autoSlide() {
        setInterval(() => this.nextSlide(), 3000);
    }
}

// Initialize slider
const slider = new ImageSlider();