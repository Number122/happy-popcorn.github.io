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
    cart.push({ name, price });
    document.getElementById('cartCount').innerText = cart.length;
    updateCartDisplay();
    document.getElementById('flavorName').innerText = name;
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString();
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString();
    document.getElementById('cartModal').style.display = 'block';
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(itemDiv);
    });
}

function checkout() {
    alert('Proceeding to checkout...');
    //TODO: Edit this
}

document.querySelector('.close').onclick = function() {
    document.getElementById('cartModal').style.display = 'none';
}