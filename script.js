const modal = document.getElementById("cartModal");
const addToCartButtons = document.querySelectorAll(".product button");
const closeButton = document.getElementsByClassName("close")[0];
let cart = [];

addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const flavorName = this.parentElement.querySelector("h3").innerText;
        document.getElementById("flavorName").innerText = "Flavor: " + flavorName;

        const currentDate = new Date().toLocaleDateString();
        document.getElementById("currentDate").innerText = currentDate;

        const currentTime = new Date().toLocaleTimeString();
        document.getElementById("currentTime").innerText = currentTime;

        modal.style.display = "block";
    });
});

closeButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("cartForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    alert("Thank you, " + userName + "! Your " + document.getElementById("flavorName").innerText + " has been added to your cart.");
    modal.style.display = "none";
});

function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    document.getElementById('cartCount').innerText = cart.length;
    updateCartDisplay();
    updateTotal(); // Update total whenever an item is added
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name} - $${item.price.toFixed(2)} (x${item.quantity})`;
        cartItemsDiv.appendChild(itemDiv);
    });
}

function updateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('totalAmount').innerText = `$${total.toFixed(2)}`;
}

function checkout() {
    alert('Proceeding to checkout...');
    //TODO: Edit this
}

document.querySelector('.close').onclick = function() {
    document.getElementById('cartModal').style.display = 'none';
}