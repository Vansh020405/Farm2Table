document.addEventListener('DOMContentLoaded', () => {
    // Hero Carousel Functionality (for index.html)
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

    // Login Form Switching (for login.html)
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

    // Product Listing Functionality (for sell-produce.html)
    const productForm = document.getElementById('product-form');
    if (productForm) {
        productForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const productName = document.getElementById('product-name').value;
            const productDescription = document.getElementById('product-description').value;
            const productCategory = document.getElementById('product-category').value;
            const productPrice = document.getElementById('product-price').value;
            const productImageURL = document.getElementById('product-image-url').value;

            // Create a product object
            const newProduct = {
                name: productName,
                description: productDescription,
                category: productCategory,
                price: productPrice,
                image: productImageURL,
                producer: 'Your Farm Name', // Placeholder for now
                location: 'Your Location' // Placeholder for now
            };

            // Get existing products from localStorage
            let products = JSON.parse(localStorage.getItem('farm2tableProducts')) || [];
            
            // Add the new product to the beginning of the array
            products.unshift(newProduct);
            
            // Save the updated array back to localStorage
            localStorage.setItem('farm2tableProducts', JSON.stringify(products));

            // Redirect to the Find Food page
            window.location.href = 'find-food.html';
        });
    }

    // Load and display products (for find-food.html)
    const newListingsContainer = document.getElementById('new-listings-container');
    if (newListingsContainer) {
        const products = JSON.parse(localStorage.getItem('farm2tableProducts')) || [];

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="producer-info"><i class="fas fa-seedling"></i> By Local Producer</p>
                <p class="price">${product.price}</p>
                <p class="location"><i class="fas fa-map-marker-alt"></i> A few miles away</p>
                <button class="btn btn-primary">View Details</button>
            `;
            newListingsContainer.appendChild(productCard);
        });
    }
});
