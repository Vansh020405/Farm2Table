document.addEventListener('DOMContentLoaded', () => {
    // Hero Carousel Functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        if (carouselItems.length > 0) {
            carouselItems[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % carouselItems.length;
            carouselItems[currentIndex].classList.add('active');
        }
    }

    if (carouselItems.length > 0) {
        carouselItems[0].classList.add('active');
        setInterval(showNextItem, 5000);
    }

    // Login Form Switching
    const userTypeSelect = document.getElementById('user-type');
    const consumerForm = document.getElementById('consumer-form');
    const producerForm = document.getElementById('producer-form');

    if (userTypeSelect) {
        userTypeSelect.addEventListener('change', (event) => {
            const selectedType = event.target.value;

            // Hide all forms first
            consumerForm.style.display = 'none';
            producerForm.style.display = 'none';

            // Show the selected form
            if (selectedType === 'consumer') {
                consumerForm.style.display = 'block';
            } else if (selectedType === 'producer') {
                producerForm.style.display = 'block';
            }
        });
    }
});
