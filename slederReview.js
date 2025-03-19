let currentIndex3 = 0;
const slides3 = document.querySelectorAll('.CleanWave-slide');

function showSlide(index) {
    slides3.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex3 = (currentIndex3 + 1) % slides.length;
    showSlide(currentIndex3);
}

setInterval(nextSlide, 3000);