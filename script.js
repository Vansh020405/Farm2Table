document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    // Initial check to ensure the first item is active
    if (carouselItems.length > 0) {
        carouselItems[0].classList.add('active');
    }

    // Change image every 5 seconds
    setInterval(showNextItem, 5000);
});