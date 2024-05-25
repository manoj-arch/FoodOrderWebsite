document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');

    let cart = [];

    function updateCartTotal() {
        let total = 0;
        cart.forEach(item => {
            total += item.price;
        });
        cartTotal.textContent = '$' + total.toFixed(2);
    }

    function addToCart(item) {
        cart.push(item);
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        updateCartTotal();
    }

    menuItems.forEach(item => {
        const buyBtns = item.querySelectorAll('.buy-btn');
        buyBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(item.dataset.id);
                const itemName = item.dataset.name;
                const itemPrice = parseFloat(item.dataset.price);
                addToCart({ id: itemId, name: itemName, price: itemPrice });
            });
        });
    });

    // Your existing JavaScript code can be integrated here
});
