document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
    const leftBtn = document.querySelector(".arrow.left");
    const rightBtn = document.querySelector(".arrow.right");
    const slider = document.querySelector(".projects-slider");

    let current = 0;
    let startX = 0;
    let endX = 0;
    let isTransitioning = false; // Prevent multiple rapid clicks

    function showCard(index, direction) {
        if (isTransitioning) return; // Prevent spam clicking
        isTransitioning = true;

        cards.forEach(card => {
            card.classList.remove("active", "prev", "next");
        });

        // Add appropriate class for outgoing card
        if (direction === "next") {
            cards[current].classList.add("prev");
        } else if (direction === "prev") {
            cards[current].classList.add("next");
        }

        current = index;
        cards[current].classList.add("active");

        // Reset transitioning flag after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }

    rightBtn.addEventListener("click", () => {
        let next = (current + 1) % cards.length;
        showCard(next, "next");
    });

    leftBtn.addEventListener("click", () => {
        let prev = (current - 1 + cards.length) % cards.length;
        showCard(prev, "prev");
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            let next = (current + 1) % cards.length;
            showCard(next, "next");
        }

        if (e.key === "ArrowLeft") {
            let prev = (current - 1 + cards.length) % cards.length;
            showCard(prev, "prev");
        }
    });

    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        let diff = startX - endX;

        // Swiped right (show next card)
        if (diff > 50) {
            let next = (current + 1) % cards.length;
            showCard(next, "next");
        }

        // Swiped left (show previous card)
        if (diff < -50) {
            let prev = (current - 1 + cards.length) % cards.length;
            showCard(prev, "prev");
        }
    }

    // Initialize first card
    cards[0].classList.add("active");
});