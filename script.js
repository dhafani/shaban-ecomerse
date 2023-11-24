document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h4').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('ksh', ''));
            total += productPrice;

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - ksh${productPrice.toFixed(4)}`;
            cartItems.appendChild(cartItem);

            cartTotal.textContent = total.toFixed(2);
        });
    });

    // Delete from Cart functionality
    cartItems.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === 'LI') {
            const itemText = e.target.textContent;
            const itemPrice = parseFloat(itemText.split(' - ')[1].replace('ksh', ''));
            total -= itemPrice;

            e.target.remove();

            cartTotal.textContent = total.toFixed(2);
        }
    });
});
/*---login---*/
function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Perform basic client-side validation
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // In a real-world scenario, send the data to the server for authentication
    // Simulate a successful login for demonstration purposes
    alert("Login successful. Redirecting to the dashboard...");
    window.location.href = "index.html";
}

function register() {
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;

    // Perform basic client-side validation
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // In a real-world scenario, send the data to the server for registration
    // Simulate a successful registration for demonstration purposes
    alert("Registration successful. Redirecting to the dashboard...");
    window.location.href = "index.html";
}