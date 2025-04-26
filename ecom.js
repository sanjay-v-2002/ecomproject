const cart = {};

// Handle "Add to Cart" and quantity updates
document.querySelectorAll('.quantity-controls').forEach(control => {
  const decreaseBtn = control.querySelector('.decrease-qty');
  const increaseBtn = control.querySelector('.increase-qty');
  const productId = increaseBtn.getAttribute('data-product-id');
  const quantitySpan = document.getElementById(`product-count-${productId}`);

  // Initialize quantity to 0
  cart[productId] = 0;

  // Increase quantity
  increaseBtn.addEventListener('click', () => {
    cart[productId]++;
    quantitySpan.textContent = cart[productId];
  });

  // Decrease quantity
  decreaseBtn.addEventListener('click', () => {
    if (cart[productId] > 0) {
      cart[productId]--;
      quantitySpan.textContent = cart[productId];
    }
  });
});

// Handle "Buy Now" button
document.querySelectorAll('.buy-now').forEach(button => {
  button.addEventListener('click', function () {
    const productId = this.getAttribute('data-product-id');
    const quantity = cart[productId];

    if (quantity > 0) {
      // Redirect to buy now page with product ID and quantity
      window.location.href ="";
    } else {
      alert('Please add at least one item to the cart before buying.');
    }
  });
});

