// cart.js

// Sample cart items
const cartItems = [
    { id: 1, name: "Book 1", price: 10.99 },
    { id: 2, name: "Book 2", price: 15.99 }
];

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Clear existing items
    cartItemsContainer.innerHTML = '';

    // Add each item to the cart
    cartItems.forEach(item => {
        totalPrice += item.price;

        const itemElement = document.createElement('li');
        itemElement.className = 'list-group-item';
        itemElement.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="btn btn-danger btn-sm" onclick="removeItem(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Update total price
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeItem(itemId) {
    const index = cartItems.findIndex(item => item.id === itemId);
    if (index > -1) {
        cartItems.splice(index, 1);
        updateCart();
    }
}

// Initialize the cart
updateCart();
